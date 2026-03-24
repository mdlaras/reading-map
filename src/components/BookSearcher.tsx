import type { Book } from "../types"
import { fetchBookWorks } from "../api/openLibrary"

export default function BookSearcher() {
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const book_name = formData.get("book_name") as string
    const author_name = formData.get("author_name") as string
    const country = formData.get("country_name") as string
    const year = Number(formData.get("year"))
    
    const book: Book = { book_name, author_name, year, country }

    try {
      const docs = await fetchBookWorks(book);
      // You can store the docs in a state here
      console.log("Search Results:", docs);
    } catch (error) {
      console.error("Search Error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
         {/* Form fields can be placed here */}
      </form>
    </div>
  )
}