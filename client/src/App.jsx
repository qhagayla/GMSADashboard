import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">
        <p>MENU:</p>
        <ul>
          <li>Dashboard</li>
          <li>Recorded Videos</li>
          <li>Results</li>
        </ul>
      </div>
      <div className="others">
        <p>OTHERS:</p>
        <ul>
          <li>Settings</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </>
  )
}

export default App