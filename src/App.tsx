// import { useState } from 'react'

import './App.css'
import BookMap from './components/BookMap'

function App() {
  return (
    <>
      <div>
        <h1>Reading Map</h1>
      </div>
      <p className="read-the-docs">
        How international is your library really? Insert the last books you read or your references here, and let us see if you have explored the world yet. 
      </p>
      <div>
        <BookMap />
      </div>
    </>
  )
}

export default App
