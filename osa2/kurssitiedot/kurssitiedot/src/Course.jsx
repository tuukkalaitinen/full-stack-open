import Header from "./Header.jsx";
import Content from "./Content.jsx";

const Course = (props) => {
    return (
        <div>
            <Header courseName={props.course.name}></Header>
            <Content parts={props.course.parts}></Content>
        </div>
    )
}

export default Course