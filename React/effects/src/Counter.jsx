import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  useEffect(function myEffect() {
    console.log("myEffect was called")
  }, [count])

  const incrementCount = () => {
    setCount(count + 1)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+1</button>
      <p>Name: </p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  )
}

export default Counter