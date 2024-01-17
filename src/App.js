import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { ProductsPage } from "./pages/ProductsPage/ProductPage";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index path="/" element={<HomePage />} />
      <Route index path="/ProductsPage" element={<ProductsPage />} />
      <Route index path="/NewsPage" element={<NewsPage />} />
      <Route index path="/ReviewsPage" element={<ReviewsPage />} />
    </Routes>
  );
};
