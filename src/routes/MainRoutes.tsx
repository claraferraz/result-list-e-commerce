import { Route, Routes } from "react-router-dom";
import {
  ShopPage,
  LoginPage,
  RegisterPage,
  CheckoutPage,
  CartPage,
  SingleProduct,
} from "../pages/index.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Router;
