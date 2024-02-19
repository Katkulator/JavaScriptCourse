import Box from "./Box";
import "./BoxGrid.css"
import { useState } from "react";

function BoxGrid({ numBoxes = 9 }) {
    const [boxes, setBoxes] = useState([false, false, true, false, false, false, false, false, false])
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false])
    }
    return <div className="BoxGrid">
        {boxes.map((b) => (<Box isActive={b} />))}
        <button onClick={reset}>Reset</button>
    </div>
}

export default BoxGrid;