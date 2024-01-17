import { Home } from "./Home";
import { HomeMenu } from "./HomeMenu";
import { Container } from "../ContainerMenu.styled";

export const HomePage = () => {
  return (
    <Container>
      <HomeMenu />
      <Home />
    </Container>
  );
};
