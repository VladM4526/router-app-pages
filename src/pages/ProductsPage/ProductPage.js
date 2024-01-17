import { Container } from "../ContainerMenu.styled";
import { Products } from "./Products";
import { ProductsMenu } from "./ProductsMenu";

export const ProductsPage = () => {
  return (
    <Container>
      <ProductsMenu />
      <Products />
    </Container>
  );
};
