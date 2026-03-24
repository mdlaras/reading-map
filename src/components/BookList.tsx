import type { Book } from "../types";
import BookSearcher from "./BookSearcher";

type Props = {
    booksList: Book[];
    addBook: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function BookList({ booksList, addBook }: Props) {
    return (
        <div>
            <BookSearcher />
            <form onSubmit={addBook}>
                <button type="submit">Add Book</button>
            </form>
            <div>
                {booksList.map((book, i) => (
                    <p key={i}>{i + 1}. {book.author_name} - {book.title}</p>
                ))}
            </div>
        </div>
    );
}