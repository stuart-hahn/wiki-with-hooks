import React, { useState } from 'react'

const App = () => {
  const [term, setTerm] = useState('')
  return (
    <>
      <div>Hello</div>
      <div>
        <form>
          <label>Search:</label>
          <input value={term} onChange={e => setTerm(e.target.value)}></input>
        </form>
      </div>
      <h1>{term}</h1>
    </>
  )
}

export default App
