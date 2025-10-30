import { useState } from 'react'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Content = ({text, value}) => {
  return(
    <p>{text} {value} </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    const updateGood = good + 1
    setGood(updateGood)
    console.log ("good", updateGood)
  }

  const handleNeutralClicks = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    console.log ("neutral", updateNeutral)
  }

  const handleBadClicks = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    console.log ("bad", updateBad)
  }

  return (
    <div>
      <Header title={'give feedback'}/>
      <div>
        <Button onClick={() => handleGoodClicks()} text={'good'} />
        <Button onClick={() => handleNeutralClicks()} text={'neutral'}/>
        <Button onClick={() => handleBadClicks()} text={'bad'} />
      </div>
      <Header title={'statistic'}/>
      <div>
        <Content text={'good'} value={good} />
        <Content text={'neutral'} value={neutral} />
        <Content text={'bad'} value={bad} />
      </div>
    </div>

  )
}

export default App