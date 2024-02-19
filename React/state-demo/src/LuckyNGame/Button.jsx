import "./Button.css"

function Button({ clickFunc }) {
    return <button
        onClick={clickFunc}
        className="Button">
        Roll Dice
    </button>
}

export default Button;