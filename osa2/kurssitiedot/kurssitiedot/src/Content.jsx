import Part from "./Part.jsx";

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part =>
                <Part key={part.id} partName={part.name} exercises={part.exercises} />
            )}
        </div>
    )
}

export default Content