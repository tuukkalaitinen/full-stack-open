import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    if (good + neutral + bad > 0) {
        return (
            <div>
                <h1>statistics</h1>
                <StatisticLine text="good" value={props.good} />
                <StatisticLine text="neutral" value={props.neutral} />
                <StatisticLine text="bad" value={props.bad} />
                <StatisticLine text="all" value={good + neutral + bad} />
                <StatisticLine text="average" value={(good + -bad) / (good + neutral + bad)} />
                <StatisticLine text="positive" value={good / (good + neutral + bad) * 100 + ' %'} />
            </div>
        )
    } else {
        return (
            <div>
                <h1>statistics</h1>
                <p>no feedback given</p>
            </div>
        )
    }
}

const StatisticLine = (props) => {
    return (
        <div>
            {props.text} {props.value}
        </div>
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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App