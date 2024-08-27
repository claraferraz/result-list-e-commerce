import { Route, Routes } from "react-router-dom";
import {
  ShopPage,
  LoginPage,
  RegisterPage,
  CheckoutPage,
  CartPage,
} from "../pages/index.tsx";
import { useAppSelector } from "../store/store.ts";
import { SingleProductDetail } from "../components/SingleProductDetails/SingleProductDetails.tsx";

export const Router = () => {
  const token = useAppSelector((state) => state.auth.token);

  console.log({ token });

  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products/:detailsId" element={<SingleProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Router;
