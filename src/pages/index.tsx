import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { ProductSection } from "../components/ProductSection/ProductSection";
import { AuthPage } from "./AuthPage/AuthPage";
import { LoginForm } from "../components/AuthForms/LoginForm";
import { RegisterForm } from "../components/AuthForms/RegisterForm";
import { SingleProductDetail } from "../components/SingleProductDetails/SingleProductDetails";

export const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <Header page="Shop" />
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

export const SingleProduct = () => {
  return (
    <div>
      <Navbar />
      <SingleProductDetail />
      <Footer />
    </div>
  );
};

export const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Header page="Cart" />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export const CheckoutPage = () => {
  return (
    <div>
      <Navbar />
      <Header page="Checkout" />
      <FeatureSection />
      <Footer />
    </div>
  );
};
