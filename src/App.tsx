import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FeatureSection } from "./components/FeatureSection/FeatureSection";

export function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeatureSection />
      <Footer />
    </div>
  );
}
