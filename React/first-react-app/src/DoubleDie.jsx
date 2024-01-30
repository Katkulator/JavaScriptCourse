// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? "You win" : "You Lose"
//     return (
//         <div>
//             <h1>{result}</h1>
//             <p>{num1}</p>
//             <p>{num2}</p>
//         </div>-
//     );

// }

// export default function DoubleDice() {
//         const num1 = Math.floor(Math.random() * 3) + 1;
//         const num2 = Math.floor(Math.random() * 3) + 1;
//         return (
//             <div>
//                 <h1>{num1 === num2 ? "You win" : "You Lose"}</h1>
//                 <p>{num1}</p>
//                 <p>{num2}</p>
//             </div>
//         );
    
//     }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h2>Double Dice</h2>
//             {num1 === num2 ? <h3>You win!</h3> : null}
//             <p>{num1}</p>
//             <p>{num2}</p>
//         </div>
//     );

// }

export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2
    const styles = {color: isWinner ? "green" : "red"};
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>{num1}</p>
            <p>{num2}</p>
        </div>
    );

}