import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = (newGoodValue) => {
    console.log("Good Value", newGoodValue)
    setGood(newGoodValue)
    setTotal(newGoodValue + neutral + bad)
    setAverage((1*newGoodValue + (-1)*bad)/3)
  }

  const handleNeutralClick = (newNeutralValue) => {
    console.log("Neutral Value", newNeutralValue)
    setNeutral(newNeutralValue)
    setTotal(good + newNeutralValue + bad)
    setAverage((1*good + (-1)*bad)/3)
  }

  const handleBadClick = (newBadValue) => {
    console.log("Bad Value", newBadValue)
    setBad(newBadValue)
    setTotal(good + neutral + newBadValue)
    setAverage((1*good + (-1)*newBadValue)/3)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleGoodClick(good + 1)} text="good"/>
      <Button onClick={() => handleNeutralClick(neutral + 1)} text="neutral"/>
      <Button onClick={() => handleBadClick(bad + 1)} text="bad"/>

      <h1>statistic</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      
    </div>
  )
}

export default App