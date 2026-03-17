// import { useState } from "react"
// import { books_list } from "../books"
import type { Book } from "../App"

type Props = {
  books_list: Book[]
  setBooksList: React.Dispatch<React.SetStateAction<Book[]>>
}
export default function BookList_Interface({books_list, setBooksList}:Props){

    
    function add_book(e){
        e.preventDefault()
        console.log(e)
        
        const formData = new FormData(e.currentTarget)
        const book_name = formData.get("book_name") as string
        const author_name = formData.get("author_name") as string
        const country = formData.get("country_name") as string
        const year = Number(formData.get("year"))
        const book : Book = {book_name, author_name, year, country}
        console.log(book_name)
        setBooksList(prev => [...prev, book])
    }
    
    return(
        <div>
            <form onSubmit={add_book}>
                <label>
                    Book Name
                    <input name="book_name" type="text" />
                </label>
                <label>
                    Author Name
                    <input name="author_name" type="text" />
                </label>
                <label>
                    Country
                    <input name="country_name" type="text" />
                </label>
                <label>
                    Year
                    <input name="year" type="number" />
                </label>
                <button type="submit">Add</button>
            </form> 
            <div>
                {books_list.map((book,i) => (
                    <p>{i+1}. {book.author_name} - {book.book_name}</p>
                ))}
            </div>
        </div>

    )
}