export default function SectionText(props) {
  return (
    <p className="prose tracking-tight text-gray-600 lg:prose-lg">
      {props.children}
    </p>
  );
}
