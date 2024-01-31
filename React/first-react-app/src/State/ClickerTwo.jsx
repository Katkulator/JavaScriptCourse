function handleClick() {
    console.log("CLICKED THE BUTTON!")
}

function handleHover() {
    console.log("HOVERED");
}

export default function ClickerTwo() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover Over Me!</p>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={() =>
                console.log("MILE UPUCO VALETINU!")}>
                Inline function
            </button>
        </div>
    )
}