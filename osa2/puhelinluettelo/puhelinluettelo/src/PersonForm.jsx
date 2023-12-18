const PersonForm = (orops) => {
    return (
        <form onSubmit={orops.handleOnSubmit}>
            <div>
                name: <input value={orops.newName} onChange={orops.handleOnNameChange} />
            </div>
            <div>number: <input value={orops.newNumber} onChange={orops.handleOnNumberChange} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm