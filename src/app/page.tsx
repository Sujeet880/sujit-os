import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ProfessionalJourney } from "@/components/sections/professional-journey";
import { HowIThink } from "@/components/sections/how-i-think";
import { ProofOfImpact } from "@/components/sections/proof-of-impact";
import { About } from "@/components/sections/about";
import { LatestArticles } from "@/components/sections/latest-articles";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedWork />

      <ProfessionalJourney />

      <HowIThink />

      <ProofOfImpact />

      <About />

      <LatestArticles />

      <ContactCTA />

      <Footer />
    </>
  );
}