import { useState } from 'react';
import type { Book } from '../types';
import { fetchBookWorks } from '../api/openLibrary';

export const useBooks = (initialBooks: Book[] = []) => {
    const [booksList, setBooksList] = useState<Book[]>(initialBooks);

    const addBook = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const book_name = formData.get("book_name") as string;
        const author_name = formData.get("author_name") as string;
        const country = formData.get("country_name") as string;
        const year = Number(formData.get("year"));

        const newBook: Book = { book_name, author_name, year, country };

        setBooksList((prev) => [...prev, newBook]);

        // Fetch works, can handle UI states here if needed (loading, etc.)
        try {
            await fetchBookWorks(newBook);
        } catch (error) {
            console.error("Failed to fetch works:", error);
        }
    };

    return {
        booksList,
        setBooksList,
        addBook
    };
};
