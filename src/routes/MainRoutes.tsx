import { Route, Routes } from "react-router-dom";
import { ShopPage, LoginPage, RegisterPage } from "../pages/index.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
