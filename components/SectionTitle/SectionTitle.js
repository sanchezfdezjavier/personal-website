import { Text } from "@nextui-org/react";

export default function SectionTitle(props) {
  return (
    <div>
      <Text h2 weight="bold">
        {props.children}
      </Text>
    </div>
  );
}
