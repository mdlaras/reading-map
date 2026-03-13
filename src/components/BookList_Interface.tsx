import { useState } from "react"
import { books_list } from "../books"

export default function BookList_Interface(){
    const [books_list,setBooksList] = useState<string[]>([])
    
    function add_book(e){
        e.preventDefault()
        console.log(e)
        const formData = new FormData(e.currentTarget)
        const book_name = formData.get("book_name")
        console.log(book_name)
        setBooksList([...books_list, book_name])
    }
    
    return(
        <div>
            <form onSubmit={add_book}>
                <label>
                    Book Name
                    <input name="book_name" type="text" />
                </label>
                <button type="submit">Add</button>
            </form> 
            <div>
                {books_list.map((book,i) => (
                    <p>{i+1}. {book}</p>
                ))}
            </div>
        </div>

    )
}