import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NarrativeSection from "@/components/NarrativeSection";
import DualitySection from "@/components/DualitySection";
import FAQSection from "@/components/FAQSection";
import AuthorSection from "@/components/AuthorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        <HeroSection />
        <NarrativeSection />
        <DualitySection />
        <FAQSection />
        <AuthorSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
