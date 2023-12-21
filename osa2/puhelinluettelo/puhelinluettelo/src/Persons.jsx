import Person from "./Person.jsx";

const Persons = (props) => {

    return (
        <div>
            {props.personsToShow.map(person => {
                return (
                    <Person key={person.id} id={person.id}  name={person.name} number={person.number} setPersons={props.setPersons}
                            setPersonsToShow={props.setPersonsToShow} persons={props.persons} personsToShow={props.personsToShow} />
                )
            })}
        </div>
    )
}

export default Persons