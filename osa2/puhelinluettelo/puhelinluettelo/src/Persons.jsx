const Persons = (props) => {
    return (
        <div>
            {props.personsToShow.map(person => {
                return (
                    <div key={person.id}>{person.name} {person.number}</div>
                )
            })}
        </div>
    )
}

export default Persons