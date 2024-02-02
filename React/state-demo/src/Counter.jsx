import { useState } from "react"

export default function Counter() {
    console.log("RENDERED!")
    const [count, setCount] = useState(0)
    const addOne = () => setCount(count + 1);
    // correct way to update state anytime state depends on the old version
    const addThree = () => setCount(currentCount => currentCount + 3); 
    const setToTen = () => setCount(10)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set to 10</button>
        </div>
    );
}