import  {v4 as uuid}  from 'uuid'
import { useState } from "react";



export default function EmojyClicker () {

    const emojiArr = [
        {id: uuid(), emoji:"🤯"},
        {id: uuid(), emoji:"😄"},
        {id: uuid(), emoji:"🥶"},
        {id: uuid(), emoji:"😆"},
        {id: uuid(), emoji:"🥳"},
    ];

    const [emojis, setEmojis] = useState([{id: uuid(), emoji:"😀"}])
    
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
            <span key={e.id} style={{fontSize: "5rem"}}>{e.emoji}</span> 
            )}<br />
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}



