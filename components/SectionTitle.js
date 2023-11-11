export default function SectionTitle(props) {
  return (
    <h2 className="mb-8 mt-10 text-5xl font-bold tracking-tight text-slate-900">
      {props.children}
    </h2>
  );
}
