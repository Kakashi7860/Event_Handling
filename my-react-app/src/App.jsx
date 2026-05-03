import { useState } from "react"


function App() {

  const[text,setText] = useState("Hello")

  function handleClick(){
    setText("Button Clicked")
  }

  return (
    <>
    <h1>{text} </h1>

      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
