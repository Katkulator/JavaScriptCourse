import { IconButton } from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';


function App() {


  return (
    <>
      <Button variant="text" size='small'>Contained</Button>
      <Button variant="contained" size='medium' >Contained</Button>
      <Button variant="outlined" size='large'>Contained</Button>
      <Button color='success' variant="contained" onClick={() => alert("hi")}>Contained</Button>
      <IconButton color='secondary' aria-label='add an alarm'>
        <AlarmIcon />
      </IconButton>
      <RatingDemo />
      <FormDemo />
    </>
  )
}

export default App
