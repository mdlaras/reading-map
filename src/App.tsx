// import { useState } from 'react'

import './App.css'
import BookList_Interface from './components/BookList_Interface'
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
      <div className='interface'>
        <div className='data output'>
          <BookMap />
        </div>
        <div className='data input'>
          <BookList_Interface />
        </div>
      </div>
    </>
  )
}

export default App
