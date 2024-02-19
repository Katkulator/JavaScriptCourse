import { useState } from "react";
import { getRolls } from "../utils";
import Dice from "./Dice";
import Button from "./Button";

function LuckyN({ numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice)

    const reRoll = () => setDice(getRolls(numDice))

    return (
        <main className="LuckyN">
            <h1>LuckyN<br />{isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            <button onClick={reRoll}>Roll The Dice</button>
            <Button clickFunc={reRoll} />
        </main>
    );
}
export default LuckyN;