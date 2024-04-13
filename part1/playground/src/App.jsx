/* eslint-disable no-unused-vars */
import { useState } from 'react'


const Statistics = (props) => {
  console.log(props.total)
  if (props.total === 0) {
    return (
      <div>No feedback</div>)
  }
  else {
    return (
      <>
        <StatisticsLine text="allx" value={props.total} />

        <div>all {props.total}</div>

        <div>average score {props.average}</div>

        <div>positive score {props.positivePercentage} %</div>
      </>
    )
  }
}

const StatisticsLine = (props) => {

  return (
    <>
      <div>
          {props.text} {props.value}

      </div>
    </>
  )
}


const Button = (props) => {

  return (
    <>
      <button onClick={props.handleClick}> {props.text} </button>
    </>
  )

}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)


  const handleGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(neutral + bad + updateGood)
    setScore(score + 1)
  }

  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotal(good + bad + updateNeutral)
  }

  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(good + neutral + updateBad)
    setScore(score - 1)
  }

  const average = score / total
  const positivePercentage = 100 * (good / total)


  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />


      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>


      <Statistics total={total} average={average} positivePercentage={positivePercentage} />


    </div>
  )
}

export default App