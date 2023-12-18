import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat({name: newName, number: newNumber}))
        setNewName('')
        setNewNumber('')
    }

    const handleOnNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleOnNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
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
            {persons.map(person => {
                return (
                    <div>{person.name} {person.number}</div>
                )
            })}
        </div>
    )
}

export default App