import { useState } from "react";

function generateGameBoard() {
    console.log("Generating new game board")
    return Array(5000);
}

export default function StateInitFunc () {
    // if you need to set the initial state using some initial state generating function, instead of executing it,
    // you can just pass the function - useState(generateGameBoard) instead of - useState(generateGameBoard())
    // as long as you pass the function in useState, react will take the function, execute it once, take the return value
    // and use it as initial state and on future renders it will just ignore it.
    // useState(generateGameBoard()) is run everytime the component renders
    // useStaet(generateGameBoard) is run only one time
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <div>
            <button onClick={() => setBoard("Hello")}>Click me to change State</button>
        </div>
    );
}