import { useState } from 'react';
import type { Book } from '../types';
import { fetchBookWorks } from '../api/openLibrary';

export const useBooks = (initialBooks: Book[] = []) => {
    const [booksList, setBooksList] = useState<Book[]>(initialBooks);

    const addBook = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const author_name = formData.get("author_name") as string;
        const country = formData.get("country_name") as string;
        const first_publish_year = Number(formData.get("first_publish_year"));

        const newBook: Book = { title, author_name, first_publish_year, country };

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
