const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises ={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]}/>


    </div>
  )
}


const Header = (props) => {
  console.log(props.course)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  console.log(props)
  return (
    <>
      <p>
        {props.parts[props.number]}  {props.exercises[props.number]}
      </p>
    </>
  )
}

const Content = ({ ...props }) => {

  const parts = props.parts
  const exercises = props.exercises

  return (
    <>
      <Part parts={parts} exercises={exercises} number={0}/>
      <Part parts={parts} exercises={exercises} number={1}/>
      <Part parts={parts} exercises={exercises} number={2}/>
    </>
  )
}



const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>

  )

}





export default App