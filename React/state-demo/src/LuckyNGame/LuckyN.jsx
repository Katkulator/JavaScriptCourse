import { useState } from "react";
import { getRolls } from "../utils";
import Dice from "./Dice";
import { sum } from "../utils";

function LuckyN ({numDice = 2, goal = 7}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === goal;

    const reRoll = () => setDice(getRolls(numDice))

    return (
        <main className="LuckyN">
            <h1>Lucky{goal}<br />{isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            <button onClick={reRoll}>Roll The Dice</button>
        </main> 
    );
}
export default LuckyN;