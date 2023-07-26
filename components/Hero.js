import { title, subtitle, showSubtitle } from "../config";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 bg-gradient-to-b from-slate-500 to-slate-900 bg-clip-text text-7xl font-bold tracking-tight text-transparent">
        {title}
      </h1>
      {showSubtitle && (
        <h3 className="text-4xl font-light tracking-tight">{subtitle}</h3>
      )}
    </div>
  );
}
