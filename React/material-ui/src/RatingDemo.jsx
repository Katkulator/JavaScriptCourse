import { Rating } from "@mui/material";
import { useState } from "react";

export default function RatingDemo() {
  const [score, setScore] = useState(0)

  return (
    <div>
      <h1>Current Rating: {score}</h1>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />
    </div>
  )
}