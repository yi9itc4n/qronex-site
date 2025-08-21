
import { Hero } from "@/components/site/hero";
import { ValueCards } from "@/components/site/value-cards";
import { ServicesOverview } from "@/components/site/services-overview";
import { ContactSection } from "@/components/site/contact-section";
import { WhyQronex } from "@/components/site/why-qronex";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueCards />
      <WhyQronex />
      <ServicesOverview />
      <ContactSection />
    </main>
  );
}
