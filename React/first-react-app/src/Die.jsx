export default function Die ({ numSides = 6 }) {
    const dieRoll = Math.floor(Math.random() * numSides) + 1
    return <h1>{numSides} sided Die Roll: {dieRoll}</h1>
}