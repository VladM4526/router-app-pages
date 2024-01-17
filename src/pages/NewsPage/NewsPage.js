import { Container } from "../ContainerMenu.styled";
import { MenuNews } from "./MenuNews";
import { News } from "./News";

export const NewsPage = () => {
  return (
    <Container>
      <MenuNews />
      <News />
    </Container>
  );
};
