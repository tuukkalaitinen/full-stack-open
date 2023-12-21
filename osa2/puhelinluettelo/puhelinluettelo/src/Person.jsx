import personService from "./PersonService.jsx";

const Person = (props) => {

    const handleDelete = () => {
        const sureToDelete = confirm(`delete ${props.name}?`)
        if (sureToDelete) {
            personService.deletePerson(props.id)
                .then(() => {
                    const persons = props.persons.filter(p => p.id !== props.id)
                    props.setPersons(persons)
                    const personsToShow = props.personsToShow.filter(p => p.id !== props.id)
                    props.setPersonsToShow(personsToShow)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div key={props.id}>{props.name} {props.number} <button onClick={handleDelete}>delete</button></div>
    )
}

export default Person