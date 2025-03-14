const Hello = (props) =>{
  return (
    <div>
      <p>Hello, {props.name} you are {props.age}</p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='jawad' age='24'/>
      <Hello name='belkerf' age={2 + 22}/>
      <Hello name='jbelkerf' />
    </div>
  )
}

export default App