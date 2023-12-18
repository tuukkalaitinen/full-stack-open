const Filter = (props) => {
    return (
        <div>Filter shown with <input value={props.searchTerm} onChange={props.handledOnSearchTermChange} /></div>
    )
}

export default Filter