import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      {/*<Testimonials />*/}
      <CTA />
      <Footer />
    </main>
  );
}
