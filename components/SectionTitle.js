export default function SectionTitle(props) {
  return (
    <h2 className="mb-8 mt-10 text-4xl font-bold tracking-tight text-black">
      {props.children}
    </h2>
  );
}
