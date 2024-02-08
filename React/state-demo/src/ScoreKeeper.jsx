import { useState } from "react";

// export default function ScoreKeeper () {
//     const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
//     const addScores = (e) => {
//         const {id} = e.target;
//         setScores((oldScores) => {
//             return {...oldScores, [id]: oldScores[id] + 1};
//         })
//     }

//     return (
//         <div>
//             <p>Player 1: {scores.p1Score}</p>
//             <p>Player 2: {scores.p2Score}</p>
//             <button id="p1Score" onClick={addScores}>+1 Player 1</button>
//             <button id="p2Score" onClick={addScores}>+1 Player 2</button>
//         </div>
//     );
// }

export default function ScoreKeeper ({numPlayers=10, target=10}) {

    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const [gameWon, setGameWon] = useState(false)

    const incScore = (idx) => {
        if (gameWon) return; 
        setScores((oldScores) => {
            const newScores = oldScores.map((score, i) => {
                if(i === idx) return score + 1;
                return score;
            });
            if (newScores[idx] >= target) {
                setGameWon(true); 
            }
            return newScores;
        });
    };
    
    const resetScores = () => {
        setScores(new Array(numPlayers).fill(0))
        setGameWon(false)
    }
    return(
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                    <li key={idx}>
                        Player{idx + 1} score: {score}
                        <button disabled={ score >= target} onClick={() => incScore(idx)}>+1</button>
                        {score >= target && "Winner"}
                    </li>
                    );
                })}
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    );
}
