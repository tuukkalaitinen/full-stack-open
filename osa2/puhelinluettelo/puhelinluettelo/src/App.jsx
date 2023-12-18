import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handleClick = (event) => {
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat({name: newName}))
        setNewName('')
    }

    const handleOnSubmit = (event) => {
        console.log('attempted submit stopped!');
        event.preventDefault()
    }

    const handleOnChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleOnSubmit}>
                <div>
                    name: <input value={newName} onChange={handleOnChange} />
                </div>
                <div>
                    <button type="button" onClick={handleClick}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => {
                return (
                    <div>{person.name}</div>
                )
            })}
        </div>
    )
}

export default App