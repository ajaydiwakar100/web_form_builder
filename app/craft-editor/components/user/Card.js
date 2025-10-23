import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";

export const Card = ({
  background = "#eee",
  padding = 20,
  title = "Title",
  subTitle = "SubTitle",
  fontSize = 20,
}) => {
  return (
    <Container
      background={background}
      padding={padding}
    >
      <div className="text-only">
        <Text text={title} fontSize={fontSize} />
        <Text text={subTitle} fontSize={fontSize - 5} />
      </div>
      <div className="buttons-only">
        <Button
          size="small"
          text="Learn more"
          variant="contained"
          color="primary"
        >Learn More </Button>
      </div>
    </Container>
  );
};
