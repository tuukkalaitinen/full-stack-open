import Header from "./Header.jsx";
import Content from "./Content.jsx";

const Course = (props) => {

    const totalNrOfExercises = props.course.parts.reduce(function (accumulator, part) {
        return accumulator + part.exercises;
    }, 0);

    return (
        <div>
            <Header courseName={props.course.name}></Header>
            <Content parts={props.course.parts}></Content>
            <p><b>total of {totalNrOfExercises} exercises</b></p>
        </div>
    )
}

export default Course