import './App.css'
import Counter from './Counter'
import EmojyClicker from './EmojiClicker'
import ScoreKeeper from './ScoreKeeper'
import StateInitFunc from './StateInitFunc'

function App() {
  return (
    <>
      <h1>State Demo</h1>
      {/* <Counter />
      <StateInitFunc />
      <ScoreKeeper /> */}
      <EmojyClicker />
      <ScoreKeeper numPlayers={3} target={5} />
    </>
  )
}

export default App
