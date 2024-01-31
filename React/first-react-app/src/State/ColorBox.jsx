import "./ColorBoxes.css"

function makeRandomColor () {
    const r = Math.floor(Math.random() * 255) + 1
    const g = Math.floor(Math.random() * 255) + 1
    const b = Math.floor(Math.random() * 255) + 1
    return `rgb(${r},${g},${b})`
 }

export default function ColorBox() {
    const styles = { backgroundColor: makeRandomColor() }
    return (
        <div className="ColorBox" style={styles}></div>
    );
}
