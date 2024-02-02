import { useState } from "react";

function generateGameBoard() {
    console.log("Generating new game board")
    return Array(5000);
}

export default function StateInitFunc () {
    const [board, setBoard] = useState(generateGameBoard)
    return (
        <div>
            <button>Click me to change State</button>
        </div>
    );
}