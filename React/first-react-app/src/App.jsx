import './App.css'
// import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'

function App() {
  return(
    <div>
      <Die numSides = {20}/>
      <Die numSides = {10}/>
      <Die />
    </div>
    
  );
  
}

export default App;

