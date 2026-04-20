import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CompletedSection } from "./components/CompletedSection";
import { CalculatorSection } from "./components/CalculatorSection";
import { AboutSection } from "./components/AboutSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <CompletedSection />
      <CalculatorSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}