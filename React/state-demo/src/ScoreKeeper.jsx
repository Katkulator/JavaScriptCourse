import { useState } from "react";

export default function ScoreKeeper () {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    // const increaseP1Score = () => {
    //     setScores(oldScores => {
    //         return {...oldScores, p1Score: oldScores.p1Score + 1};
    //     })};
    // const increaseP2Score = () => {
    //     setScores(oldScores => {
    //         return {...oldScores, p2Score: oldScores.p2Score + 1};
    //     })};
    const addScores = (e) => {
        const {id} = e.target;
        setScores((oldScores) => {
            return {...oldScores, [id]: oldScores[id] + 1};
        })
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button id="p1Score" onClick={addScores}>+1 Player 1</button>
            <button id="p2Score" onClick={addScores}>+1 Player 2</button>
        </div>
    );
}

