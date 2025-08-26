import { useState } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const selector = useSelector(state => state.counter)
  console.log(selector.count)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {selector.count}
        </button>
        <div>
          <button>Increment</button>
          <p>0</p>
          <button>Decrement</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
