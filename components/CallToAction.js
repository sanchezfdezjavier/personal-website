import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { mainButtonText, externalLinks, secondaryButtonText } from "../config";

export default function CallToAction() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-2 py-[2rem] md:grid-cols-2">
      <Link
        href={externalLinks.stackai}
        target="_blank"
        rel="noreferrer"
        className="flex w-full rounded-xl bg-black px-4 py-2 text-xl font-light text-white shadow shadow-slate-800/50 transition-all hover:bg-gray-900 md:w-fit"
      >
        <span>{mainButtonText}</span>
      </Link>
    </div>
  );
}
