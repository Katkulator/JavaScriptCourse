import { useState } from "react";



export default function EmojyClicker () {
    const emojiArr = ["🤯", "😄", "🥶", "😆", "🥳"]
    const [emojis, setEmojis] = useState(["😀", ])
    const selectEmoji = (arr) => {
        const randIndex = Math.floor(Math.random() * arr.length);
        return arr[randIndex]
    }
    const addEmoji = () => {
       setEmojis((oldEmojis) => [...oldEmojis, selectEmoji(emojiArr)]) //...emojis makes a copy of an old array and adds in "🤯"
    }
    return (
        <div>
            {emojis.map((e) => 
            <span style={{fontSize: "5rem"}}>{e}</span> 
            )}<br />
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}

