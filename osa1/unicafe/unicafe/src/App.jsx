import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleVoteGood = () => setGood(good + 1)
    const handleVoteNeutral = () => setNeutral(neutral + 1)
    const handleVoteBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button
                handleClick={handleVoteGood}
                text='good'
            />
            <Button
                handleClick={handleVoteNeutral}
                text='neutral'
            />
            <Button
                handleClick={handleVoteBad}
                text='bad'
            />
            <h1>statistics</h1>
            good {good}<br/>
            neutral {neutral}<br/>
            bad {bad}<br/>
            all {good + neutral + bad}<br/>
            average {good + neutral + bad > 0 ? (good + -bad) / (good + neutral + bad) : 0 }<br/>
            positive {good + neutral + bad > 0 ? good / (good + neutral + bad) * 100 : 0} %<br/>
        </div>
    )
}

export default App