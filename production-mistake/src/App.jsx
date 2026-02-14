import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn , setisLoogedIn] = useState(false)

  return (
    <div style={{padding: "2rem"}}>
      <h1>Welcome to chai aur code</h1>
      <button
      onClick={() => setisLoogedIn(!isLoggedIn)}>Toogle login</button>

      <div>
        <h3>&& opreator</h3>
        {isLoggedIn && <p>Welcome to the website</p>}
      </div>
      <div>
        <h3>Ternary opreator</h3>
        {isLoggedIn ? <p>Welcome to the website</p> : "please login"}
      </div>
    </div>
    
  )
}

export default App
