import './App.css'
import BookList from './components/BookList'
import BookMap from './components/BookMap'
import { useBooks } from './hooks/useBooks'

function App() {
  const { booksList, addBook } = useBooks();

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
          <BookMap books_list={booksList} />
        </div>
        <div className='data input'>
          <BookList
            booksList={booksList}
            addBook={addBook}
          />
        </div>
      </div>
    </>
  )
}

export default App
