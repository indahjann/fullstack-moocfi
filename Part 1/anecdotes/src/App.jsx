import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Content = ({text}) => {
  return (
    <div>{text}</div>
  )
}

const Votes = ({value}) => {
  return(
    <p>has {value} votes</p>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const max = anecdotes.length
  //console.log (max)

  const maxVote = Math.max(...votes)
  const maxVoteIndex = votes.indexOf(maxVote)

  const handleNextClick = () => {
    const newSelected = Math.floor(Math.random() * max)
    setSelected(newSelected)
    console.log("idx: ", newSelected, "text: ", anecdotes[newSelected])
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log("idx: ", selected, "votes: ", copy[selected])
  }

  return (
    <>
      <Header text={'Anecdotes of the day'} />
      <div>
        <Content text={anecdotes[selected]}/>
        <Votes value={votes[selected]} />
        <Button onClick={handleVoteClick} text={"vote"}/>
        <Button onClick={handleNextClick} text={"new anecdote"}/>
      </div>
      
      <Header text={'Anecdotes with most votes'} />
      {maxVote === 0 ? (
        <p>No votes yet</p>
      ) : (
        <div>
          <Content text={anecdotes[maxVoteIndex]}/>
          <Votes value={maxVote} />
        </div>
      )}
    </>
  )
}

export default App