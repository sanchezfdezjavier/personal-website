import bookCoverOverlay from "../assets/books-covers/book-overlay.png";

import Image from "next/image";

export default function BookCover(props) {
  return (
    <div className="relative m-[1rem] shadow-2xl transition-transform hover:-translate-y-1">
      <Image
        src={props.coverSrc}
        alt="avatar"
        layout="intrinsic"
        width={200}
        height={300}
      />
      <div className="absolute right-0 top-0 z-[1000] mix-blend-multiply">
        <Image
          src={bookCoverOverlay.src}
          alt="avatar"
          layout="intrinsic"
          width={200}
          height={300}
        />
      </div>
    </div>
  );
}
