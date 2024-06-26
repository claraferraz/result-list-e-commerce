import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FeatureSection } from "./components/FeatureSection/FeatureSection";
import { ProductSection } from "./components/ProductSection/ProductSection";

export function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}
