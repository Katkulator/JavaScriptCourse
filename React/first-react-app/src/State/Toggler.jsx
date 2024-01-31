import { useState } from "react";

export default function Toggler () {
    let [isHappy, setIsHappy] = useState(true)
    const toggleHappy = () => setIsHappy(!isHappy)

    return(
        <div>
            <button onClick={toggleHappy}>
                {isHappy ? "😊" : "😔"}
            </button>
        </div>
    );
}