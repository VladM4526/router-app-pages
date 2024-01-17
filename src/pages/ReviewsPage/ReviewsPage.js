import { Container } from "../ContainerMenu.styled";
import { Reviews } from "./Reviews";
import { ReviewsMenu } from "./ReviewsMenu";

export const ReviewsPage = () => {
  return (
    <Container>
      <ReviewsMenu />
      <Reviews />
    </Container>
  );
};
