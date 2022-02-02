import { Card, Row, Col, Text, Button } from "@nextui-org/react";

export default function ProjectCard(props) {
  return (
    <Card cover shadow css={{ w: "100%", p: 0 }}>
      <Card.Body>
        <Card.Image
          src={props.image}
          height={400}
          width="100%"
          alt="project preview"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#0f1114",
          borderTop: "$borderWeights$light solid $gray700",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text h3 color="white" size={18}>
              {props.title}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#FFEF02", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Check it out
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
