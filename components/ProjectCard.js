import Image from "next/legacy/image";

export default function ProjectCard(props) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white shadow-md transition-all hover:-translate-y-1">
      <a href={props.projectLink} target="_blank" className="w-[5rem]">
        <Image
          className="rounded-t-lg"
          src={props.image}
          alt="project preview image"
          width={525}
          height={320}
        />
        <div className="p-4">
          <h5 className="text-gray-90 text-xl font-medium tracking-tight text-slate-600">
            {props.title}
          </h5>
        </div>
      </a>
    </div>
  );
}
