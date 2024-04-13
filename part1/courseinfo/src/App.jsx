const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }




  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />


    </div>
  )
}


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  const part = props.part
  console.log(props)
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Content = ({ ...props }) => {
  const parts = props.parts
  console.log(parts)

  return (
    <>
      {parts.map((part, idx) => {
        return <Part part={part} key={idx}/>
      })}

    </>
  )
}



const Total = (props) => {
  console.log(props.exercises[0].exercises)
  return (
    <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>

  )

}





export default App