import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Uint8Array(8));

    const getRandomInt = () => Math.floor(Math.random() * (anecdotes.length - 1));

    const handleNextAnecdote = () => setSelected(getRandomInt())

    const handleVote = () => {
        let copyOfVotes = [...votes]
        copyOfVotes[selected] += 1
        setVotes(new Uint8Array(copyOfVotes))
    };

    return (
        <div>
            {anecdotes[selected]}<br/>
            has {votes[selected]} votes<br/>
            <Button text={'vote'} handleClick={handleVote} />
            <Button text={'next anecdote'} handleClick={handleNextAnecdote} />
        </div>
    )
}

export default App