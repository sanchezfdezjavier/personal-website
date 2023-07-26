import { HiOutlineExternalLink } from "react-icons/hi";

import { mainButtonText, externalLinks } from "../config";

export default function MainButton() {
  return (
    <div className="py-[4rem]">
      <a
        href={externalLinks.blog}
        target="_blank"
        rel="noreferrer"
        className="flex w-fit rounded-xl bg-slate-900 px-[5rem] py-[1.5rem] text-xl font-medium text-white shadow-lg shadow-slate-800/50 transition-all hover:-translate-y-1 hover:bg-slate-800"
      >
        {mainButtonText}&nbsp;
        <HiOutlineExternalLink />
      </a>
    </div>
  );
}
