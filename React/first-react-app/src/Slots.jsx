// export default function Slots() {
//     const slot = () => {
//         const num = Math.floor(Math.random() * 3) + 1;
//         switch (num) {
//             case 1:
//                 return "🍒"
//             case 2:
//                 return "🍌"
//             case 3:
//                 return "🍊"
//         }

//     }

//     return (
//         <div>
//             <p>{slot()}{slot()}{slot()}</p>
//             <p>{slot()}{slot()}{slot()}</p>
//             <p>{slot()}{slot()}{slot()}</p>
//         </div>
//     );
// }

export default function Slots({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3
    const styles = { color: isWinner ? "green" : "red" };
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            <h2 style={styles}>{isWinner ? "You win!" : "You loose!"}</h2>
            {isWinner && <h3>Congrats!</h3>}
        </div>
    );
}