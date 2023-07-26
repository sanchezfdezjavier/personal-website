import { avatarSrc } from "../config";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative mb-12 mt-[8rem] block h-[17rem] w-[17rem] items-center justify-center lg:mt-[12rem]">
      <Image
        src={avatarSrc}
        className="rounded-2xl"
        alt="avatar"
        layout="fill"
      />
    </div>
  );
}
