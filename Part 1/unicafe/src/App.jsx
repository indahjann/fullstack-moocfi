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

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

    // <div>
    //   {props.text} {props.value} <br />
    // </div>
  )
}

const Statistics = (props) => {
  const average = props.total === 0 ? 0 : (props.good - props.bad)/props.total
  const positive = props.total === 0 ? '0 %' : (props.good/props.total)*100 + ' %'

  if (props.total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  
  return (
      <table>
        <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={props.total} />
          <StatisticLine text="average" value ={average} />
          <StatisticLine text="positive" value ={positive} />
        </tbody>
      </table>
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

  return (
    <div>
      <Header title={'give feedback'}/>
      <div>
        <Button onClick={() => handleGoodClicks()} text={'good'} />
        <Button onClick={() => handleNeutralClicks()} text={'neutral'}/>
        <Button onClick={() => handleBadClicks()} text={'bad'} />
      </div>
      <Header title={'statistic'}/>
      
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}/>

    </div>

  )
}

export default App