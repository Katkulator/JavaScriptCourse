import { useState } from "react";

// function makeRandomColor() {
//     const r = Math.floor(Math.random() * 255) + 1
//     const g = Math.floor(Math.random() * 255) + 1
//     const b = Math.floor(Math.random() * 255) + 1
//     return `rgb(${r},${g},${b})`
// }

function getColor(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(getColor(colors));
    const changeColor = () => {
        const randomColor = getColor(colors);
        setColor(randomColor)
    }
    return (
        <div
            className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color, width: '20%', height: '20%' }}
        ></div>
    );
}

