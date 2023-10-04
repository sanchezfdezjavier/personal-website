import { avatarSrc } from "../config";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className="mb-12 mt-[4rem] flex h-[14rem] w-[14rem] items-center justify-center lg:mt-[10rem] lg:h-[12rem] lg:w-[17rem]">
      <Image
        src={avatarSrc}
        className="rounded-[1rem] border border-solid border-gray-400 shadow-md"
        alt="avatar"
        width={220}
        height={220}
      />
    </div>
  );
}
