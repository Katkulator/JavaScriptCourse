import './App.css'
import Counter from './Counter'
import EmojyClicker from './EmojiClicker'
import ScoreKeeper from './ScoreKeeper'
import StateInitFunc from './StateInitFunc'
import Lucky7 from './Lucky7'
import Dice from '../../state-demo/src/LuckyNGame/Dice'
import LuckyN from './LuckyNGame/LuckyN'

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
      <LuckyN />
      <LuckyN numDice={3} goal={11} />
    </>
  )
}

export default App 
