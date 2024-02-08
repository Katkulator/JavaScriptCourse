import { useState } from "react";

export default function Players () {
    const [score, setScore] = useState(0)

    const incScore = () => {
        setScore(() => score + 1)
    }

    return (
        <li></li>
    );

}