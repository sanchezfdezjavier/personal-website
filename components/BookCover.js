import bookCoverOverlay from "../assets/books-covers/book-overlay.png";

import Image from "next/image";

export default function BookCover(props) {
  const sizeMultiplier = 0.9;
  return (
    <div className="relative m-[1rem] shadow-lg shadow-gray-600/50 transition-transform hover:-translate-y-1">
      <Image
        src={props.coverSrc}
        alt="book cover"
        width={200 * sizeMultiplier}
        height={300 * sizeMultiplier}
      />
      <div className="absolute right-0 top-0 z-[1000] mix-blend-multiply">
        <Image
          src={bookCoverOverlay.src}
          alt="book cover overlay"
          width={200 * sizeMultiplier}
          height={300 * sizeMultiplier}
        />
      </div>
    </div>
  );
}
