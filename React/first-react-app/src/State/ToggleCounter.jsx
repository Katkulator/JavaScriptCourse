import { useState } from "react";

export default function ToggleCounter () {
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0)
    const toggleHappy = () => setIsHappy(!isHappy)
    const changeCount = () => setCount(count + 1);

    return(
        <div>
            <button onClick={() => {
                toggleHappy();
                changeCount();
            }} style={{fontSize: "5rem", width:"630px"}}>
                KLIKNI ME!
                {isHappy ? "🤚" : "🖕"}
            </button>
            <p>{count}</p>
        </div>
    );
}