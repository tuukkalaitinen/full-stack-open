import {useEffect, useState} from 'react'
import Filter from './Filter.jsx'
import PersonForm from "./PersonForm.jsx";
import Persons from "./Persons.jsx";
import axios from "axios";
import personService from "./PersonService.jsx";

const App = () => {
    const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas', number: '040-123456'}])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [personsToShow, setPersonsToShow] = useState(persons)

    const handleOnSubmit = (event) => {
        event.preventDefault()

        let maxExistingId = Math.max(...persons.map(p => p.id));

        let personObject = {
            id: maxExistingId + 1,
            name: newName,
            number: newNumber,
        }

        if (persons.filter(person => person.name === newName).length > 0) {
            const wantToUpdateNumber = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (wantToUpdateNumber) {
                const oldId = persons.filter(person => person.name === newName)[0].id;
                personObject = {...personObject, id: oldId }
                personService.update(oldId, {...personObject, id: oldId })
                    .then(returnedPerson => {
                        console.log(returnedPerson)
                        setPersons(persons.map(person => person.id !== oldId ? person : returnedPerson))
                        setPersonsToShow(personsToShow.map(person => person.id !== oldId ? person : returnedPerson))
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                return
            }
        } else {
            personService.create(personObject)
                .then(response => {
                    console.log(response)
                    setPersons(persons.concat(personObject))
                    setPersonsToShow(persons.concat(personObject))
                })
                .catch(error => {
                    console.log(error)
                    alert(error);
                })

        }
        setNewName('')
        setNewNumber('')
    }

    const handleOnNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleOnNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handledOnSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
        const filteredPersons = persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase()))
        setPersonsToShow(filteredPersons)
    }

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
                setPersonsToShow(response.data)
            })
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchTerm={searchTerm} handledOnSearchTermChange={handledOnSearchTermChange} />
            <h3>Add a new</h3>
            <PersonForm handleOnSubmit={handleOnSubmit} newName={newName} handleOnNameChange={handleOnNameChange} newNumber={newNumber}
                        handleOnNumberChange={handleOnNumberChange} />
            <h3>Numbers</h3>
            <Persons persons={persons} personsToShow={personsToShow} setPersons={setPersons} setPersonsToShow={setPersonsToShow}/>
        </div>
    )
}

export default App