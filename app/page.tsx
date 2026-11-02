import HeroCarousel from "@/components/HeroCarousel";
import CategoryStrip from "@/components/CategoryStrip";
import BestSellers from "@/components/BestSellers";
import PromoBanners from "@/components/PromoBanners";
import BenefitsStrip from "@/components/BenefitsStrip";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <CategoryStrip />
      <BestSellers />
      <PromoBanners />
      <BenefitsStrip />
    </main>
  );
}