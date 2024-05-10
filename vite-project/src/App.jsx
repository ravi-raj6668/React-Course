import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dev from './Dev'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Project</h1>
      <div className="card">
        <button onClick={() => setCount((Increase) => Increase + 1)}>
          Click count : {count}
        </button>
      </div>
      <p className="read-the-docs">
        Developed by Ravi ❤️
      </p>
      <Dev />
    </>
  )
}

export default App
