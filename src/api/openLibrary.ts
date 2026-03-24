import type { Book } from '../types';

export const fetchBookWorks = async (book: Book) => {
    try {
        const res = await fetch(
            `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author_name)}`
        );
        if (!res.ok) {
            throw new Error('Failed to fetch from Open Library');
        }

        const result = await res.json();
        console.log("FULL RESULT:", result);
        console.log("DOCS:", result.docs);

        return result.docs;
    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
};
