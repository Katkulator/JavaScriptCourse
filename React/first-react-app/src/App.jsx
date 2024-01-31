import './App.css'
// import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDie';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList'
import Clicker from './Clicker';
import Form from './Form';
import ClickerTwo from './State/ClickerTwo';
import Counter from './State/Counter';
import Toggler from './State/Toggler';
import ToggleCounter from './State/ToggleCounter';
import ColorBox from './State/ColorBox';

const data = [
  { id: 1, item: "Eggs", quantity: 12, completed: false },
  { id: 2, item: "Milk", quantity: 2, completed: true },
  { id: 3, item: "Bread", quantity: 1, completed: false },
  { id: 4, item: "Pasta", quantity: 3, completed: false },
  { id: 5, item: "Vegetables", quantity: 7, completed: true }
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
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
      {/* <Slots val1="🍒" val2="🍌" val3="🍊" />
      <Slots val1="🍒" val2="🍒" val3="🍒" /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyList properties = {properties} /> */}
      {/* <Form /> */}
      {/* <Clicker message ="hello!" buttonText="Click Me!"/>
      <Clicker message ="wassup" buttonText="Click Me 2!"/> */}
      {/* <ClickerTwo />
      <Counter /> */}
      {/* <ToggleCounter /> */}
      <ColorBox />
    </div>

  );

}

export default App;

