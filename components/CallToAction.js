import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { mainButtonText, externalLinks, secondaryButtonText } from "../config";

export default function CallToAction() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-2 py-[2rem] md:grid-cols-2">
      <Link
        href={externalLinks.stackai}
        target="_blank"
        rel="noreferrer"
        className="flex w-full rounded-xl bg-black px-[5rem] py-[1.5rem] text-xl font-light text-white shadow shadow-slate-800/50 transition-all hover:bg-gray-900 md:w-fit"
      >
        <span>{mainButtonText}</span>
      </Link>
      <Link
        href={externalLinks.blog}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center rounded-xl px-[5rem] py-[1.5rem] text-xl text-black transition-all hover:underline md:w-fit"
      >
        {secondaryButtonText}
        <HiOutlineExternalLink className="ml-2 inline-block stroke-2" />
      </Link>
    </div>
  );
}
