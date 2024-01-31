// function handleClick () {
//     console.log("Clicked the button!")
// }

// function handleHover () {
//     console.log("Hovered!")
// }

// export default function Clicker () {
//     return (
//         <div>
//             <p onMouseOver={handleHover}>Click the button!</p>
//             <button onClick={handleClick}>Click Me!</button>
//         </div>
//     );
// }


export default function Clicker ({message, buttonText}) {
    return <button onClick={() => alert(message)}>{buttonText}</button>;
}