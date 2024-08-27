import { Route, Routes } from "react-router-dom";
import { ShopPage, LoginPage, RegisterPage } from "../pages/index.tsx";
import { useAppSelector } from "../store/store.ts";

export const Router = () => {
  const token = useAppSelector((state) => state.auth.token);

  console.log({ token });

  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
