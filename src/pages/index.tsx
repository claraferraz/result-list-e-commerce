import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { ProductSection } from "../components/ProductSection/ProductSection";
import { AuthPage } from "./AuthPage/AuthPage";
import { LoginForm } from "../components/AuthForms/LoginForm";
import { RegisterForm } from "../components/AuthForms/RegisterForm";

export const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export const LoginPage = () => {
  return (
    <AuthPage>
      <LoginForm />
    </AuthPage>
  );
};
export const RegisterPage = () => {
  return (
    <AuthPage>
      <RegisterForm />
    </AuthPage>
  );
};
