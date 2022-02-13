import { Text } from "@nextui-org/react";

export default function SectionTitle(props) {
  return (
    <div>
      <Text h1>{props.children}</Text>
    </div>
  );
}
