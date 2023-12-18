import { useState } from 'react'
import Filter from './Filter.jsx'
import PersonForm from "./PersonForm.jsx";
import Persons from "./Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '', id: 1 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [personsToShow, setPersonsToShow] = useState(persons)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat({ id: persons.length + 1,  name: newName, number: newNumber}))
        setPersonsToShow(persons.concat({ id: persons.length + 1,  name: newName, number: newNumber}))
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

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchTerm={searchTerm} handledOnSearchTermChange={handledOnSearchTermChange} />
            <h3>Add a new</h3>
            <PersonForm handleOnSubmit={handleOnSubmit} newName={newName} handleOnNameChange={handleOnNameChange} newNumber={newNumber}
                        handleOnNumberChange={handleOnNumberChange} />
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App