import type { Book } from "../types";

type Props = {
    booksList: Book[];
    addBook: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function BookList({ booksList, addBook }: Props) {
    return (
        <div>
            <form onSubmit={addBook}>
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
                <button type="submit">Add Book</button>
            </form>
            <div>
                {booksList.map((book, i) => (
                    <p key={i}>{i + 1}. {book.author_name} - {book.book_name}</p>
                ))}
            </div>
        </div>
    );
}