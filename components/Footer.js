import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVercel } from "react-icons/si";

import { footerText } from "../config";

export default function Footer() {
  return (
    <div className="mt-[8rem] flex w-screen flex-col items-center py-[2rem] text-slate-400">
      <div className="flex w-11/12 flex-row items-center justify-center">
        <span className="mr-1 inline-block">Built using</span>
        <span className="m-1 inline-block">
          <SiTailwindcss size={25} className="hover:text-blue-400" />
        </span>
        <span className="m-1 inline-block">
          <TbBrandNextjs size={25} className="hover:text-black" />
        </span>
        <span className="m-1 inline-block hover:text-blue-700">
          <SiTypescript size={20} />
        </span>
        <span className="m-1 inline-block hover:text-black">
          <SiVercel size={20} />
        </span>
      </div>
      <p className="mt-4 w-11/12 text-center">{footerText}</p>
    </div>
  );
}
