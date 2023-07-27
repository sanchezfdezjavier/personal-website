import { avatarSrc } from "../config";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative mb-12 mt-[4rem] block h-[14rem] w-[14rem] items-center justify-center lg:mt-[12rem] lg:h-[17rem] lg:w-[17rem]">
      <Image
        src={avatarSrc}
        className="rounded-[3rem]"
        alt="avatar"
        layout="fill"
      />
    </div>
  );
}
