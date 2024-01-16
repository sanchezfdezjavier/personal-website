import BookCover from "./BookCover";

import { bookCovers } from "../config";

export default function BookShelf() {
  const books = bookCovers.map((book) => {
    return <BookCover key={book.title} coverSrc={book.src} />;
  });
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">{books}</div>
  );
}
