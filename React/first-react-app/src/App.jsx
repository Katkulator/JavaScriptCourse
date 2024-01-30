import './App.css'
// import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDie';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';

function App() {
  return(
    <div>
      {/* <Heading  color='magenta' text = "im a heading" fontSize="48px"/>
      <Heading  color='teal' text = "im a heading too" fontSize="20px"/>
      <Die numSides = {20}/>
      <Die numSides = {10}/> 
      <Die />
      <ListPicker values= {[1,2,3,4,5,6]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors = {["red", "blue", "green", "purple"]} /> */}
      <Slots val1="🍒" val2="🍌" val3="🍊" />
    </div>
    
  );
  
}

export default App;

