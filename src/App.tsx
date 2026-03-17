import { useState } from 'react'

import './App.css'
import BookList_Interface from './components/BookList_Interface'
import BookMap from './components/BookMap'

export type Book = {
  book_name: string
  author_name: string
  year: number
  country: string
}


function App() {
  const [books_list,setBooksList] = useState<Book[]>([])
  return (
    <>
      <div>
        <h1>Reading Map</h1>
      </div>
      <p className="read-the-docs">
        Map out the books that you have read!
      </p>
      <div className='interface'>
        <div className='data output'>
          <BookMap books_list = {books_list}/>
        </div>
        <div className='data input'>
          <BookList_Interface 
            books_list = {books_list}
            setBooksList = {setBooksList}
          />
        </div>
      </div>
    </>
  )
}

export default App
