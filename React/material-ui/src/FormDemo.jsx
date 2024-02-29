import { TextField } from "@mui/material"
import { useState } from "react"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"


export default function FormDemo() {
  const [name, setName] = useState("")
  const [volume, setVolume] = useState(50)

  const updateName = (e) => {
    setName(e.target.value)
  }

  const changeVolume = (e, newVal) => {
    setVolume(newVal)
  }

  return (
    <Box sx={{ border: '1px solid white', borderRadius: 10, p: 10 }}>
      <h1>Name: {name}</h1>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Type something"
        color="secondary"
        value={name}
        onChange={updateName} />
      <h2>Volume {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </Box>
  )
}