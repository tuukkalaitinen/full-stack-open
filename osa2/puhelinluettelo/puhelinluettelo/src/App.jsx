import { useState } from 'react'

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

            <div>Filter shown with <input value={searchTerm} onChange={handledOnSearchTermChange} /></div>

            <h2>Add a new</h2>
            <form onSubmit={handleOnSubmit}>
                <div>
                    name: <input value={newName} onChange={handleOnNameChange} />
                </div>
                <div>number: <input value={newNumber} onChange={handleOnNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {personsToShow.map(person => {
                return (
                    <div key={person.id}>{person.name} {person.number}</div>
                )
            })}
        </div>
    )
}

export default App