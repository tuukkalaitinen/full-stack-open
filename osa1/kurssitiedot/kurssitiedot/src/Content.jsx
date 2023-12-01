import Part from "./Part.jsx";

const Content = (props) => {
    return (
        <div>
            <Part partName={props.part1Name} exercises={props.exercises1} />
            <Part partName={props.part2Name} exercises={props.exercises2} />
            <Part partName={props.part3Name} exercises={props.exercises3} />
        </div>
    )
}

export default Content