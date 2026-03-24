import type { Book } from "../types"
import { fetchBookWorks } from "../api/openLibrary"
import { useState } from "react"

export default function BookSearcher() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string
    const author_name = formData.get("author_name") as string
    const country = formData.get("country_name") as string
    const first_publish_year = Number(formData.get("first_publish_year"))

    const book: Book = { title, author_name, first_publish_year, country }

    try {
      const docs = await fetchBookWorks(book);
      setSearchResults(docs);
      console.log("Search Results:", docs);
    } catch (error) {
      console.error("Search Error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Book Name
          <input name="book_name" type="text" required />
        </label>
        <label>
          Author Name
          <input name="author_name" type="text" required />
        </label>
        <label>
          Country
          <input name="country_name" type="text" required />
        </label>
        <label>
          Year
          <input name="year" type="number" required />
        </label>
        <button type="submit">Search Works</button>
      </form>
      <div>
        {searchResults.map((book, i) => (
          <div key={i} style={{ borderWidth: "1px", borderColor: "black", borderStyle: "solid" }}>
            <p>{book.title}</p>
            <p>{book.author_name}</p>
            <p>{book.first_publish_year}</p>
            <p>{book.country}</p>
          </div>
        ))}
      </div>
    </div>
  )
}