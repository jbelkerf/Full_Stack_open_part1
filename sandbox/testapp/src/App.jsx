import { useState } from "react";

const Display = ({counter})=>{
  return(
    <div>{counter}</div>
  )
}

const Button = ({onClick, text})=>{
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const plus = ()=>setCounter(counter + 1)
  const zero = ()=>setCounter(0)
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={plus} text="plus" />
      <br></br>
      <Button onClick={zero} text="set to zero" />
    </div>
  )
}

export default App