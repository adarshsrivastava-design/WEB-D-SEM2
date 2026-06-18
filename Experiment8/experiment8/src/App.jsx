import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <section className="counter-card" aria-labelledby="counter-title">
        <h1 id="counter-title">React Counter Application</h1>

        <p className="count-value" aria-live="polite">
          {count}
        </p>

        <div className="button-row">
          <button type="button" onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>
          <button type="button" onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>
        </div>

        <button type="button" className="reset-button" onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </main>
  )
}

export default App
