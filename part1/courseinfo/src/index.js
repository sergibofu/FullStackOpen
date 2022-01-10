import React from 'react'
import ReactDOM from 'react-dom'
//HEADER()
const Header = (props) => {
 return(<h1>{props.course.name}</h1>)
}
//CONTENT()
const Content = (props) => {
    
    return(
        <div>
        <Part1 part1 = {props.parts.parts[0].name} exercises1 = {props.parts.parts[0].exercises}/>
        <Part2 part2 = {props.parts.parts[1].name} exercises2 = {props.parts.parts[1].exercises}/>
        <Part3 part3 = {props.parts.parts[2].name} exercises3 = {props.parts.parts[2].exercises}/>
    
        </div>

    )

}
//TOTAL()
const Total = (props) =>{

   return(<p> Number of exercices {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>) 
}
//PART1()
const Part1 = (props) => {
    return(
    <p>
        {props.part1} {props.exercises1}
    </p>)
}
//PART2()
const Part2 = (props) => {
    return(
    <p>
        {props.part2} {props.exercises2}
    </p>)
}
//PART3()
const Part3 = (props) => {
    return(
    <p>
        {props.part3} {props.exercises3}
    </p>)
}
//APP()
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
        <Header course = {course}/>
        <Content parts ={course}/>
        <Total parts = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))