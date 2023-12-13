import Course from "./Course.jsx";

const Courses = (props) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {props.courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}
export default Courses