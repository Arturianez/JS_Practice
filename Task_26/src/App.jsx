import './App.css'
import { CheckData } from './components/CheckData'
import { ConditionalRendering } from './components/ConditionalRendering'
import { Counter } from './components/Counter'
import { Greetings } from './components/Greetings'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Switch } from './components/Switch'
import { User } from './components/User'

function App() {
  

  return (
    <>
      <Header/>
      <Post/>
      <ConditionalRendering/>
      <Counter/>
      <Switch/>
      <Greetings/>
      <CheckData/>
      <User/>
    </>
  )
}

export default App
