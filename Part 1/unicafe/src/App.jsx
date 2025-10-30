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
  const [total, setTotal] = useState(0)

  const handleGoodClicks = () => {
    const updateGood = good + 1
    setGood(updateGood)
    console.log ("good", updateGood)
    setTotal(updateGood + neutral + bad)
  }

  const handleNeutralClicks = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    console.log ("neutral", updateNeutral)
    setTotal(good + updateNeutral + bad)
  }

  const handleBadClicks = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    console.log ("bad", updateBad)
    setTotal(good + neutral + updateBad)
  }

  const average = () => {
    if (total === 0) return 0
    return ((good - bad)/total)
  }

  const positive = () => {
    if (total === 0) return 0
    return ((good / total) * 100) + ' %'
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
        <Content text={'all'} value={total} />
        <Content text={'average'} value={average()} />
        <Content text={'positive'} value={positive()} />
      </div>
    </div>

  )
}

export default App