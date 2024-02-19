import './App.css'
import Counter from './Counter'
import EmojyClicker from './EmojiClicker'
import ScoreKeeper from './ScoreKeeper'
import StateInitFunc from './StateInitFunc'
import Lucky7 from './Lucky7'
import Dice from '../../state-demo/src/LuckyNGame/Dice'
import LuckyN from './LuckyNGame/LuckyN'
import { sum } from './utils'
import Box from './Box'
import BoxGrid from './BoxGrid'

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allEqual(dice) {
  return dice.every(v => v === dice[0])
}

function App() {
  return (
    <>
      {/* <Counter />
      <StateInitFunc />
      <ScoreKeeper /> */}
      {/* <EmojyClicker />
      <ScoreKeeper numPlayers={3} target={5} /> */}
      {/* <Lucky7 /> */}
      {/* <Dice dice={[3,6,9]} color="blue"/>
      <Dice dice={[3,6,9]} color="green"/> */}
      {/* <LuckyN numDice={2} winCheck={lessThan4} />
      <LuckyN numDice={2} winCheck={allEqual} /> */}
      <BoxGrid />
    </>
  )
}

export default App 
