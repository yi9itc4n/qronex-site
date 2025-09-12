
import { Hero } from "@/components/site/hero";
import { ContactSection } from "@/components/site/contact-section";
import { WhyQronex } from "@/components/site/why-qronex";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyQronex />
      <ContactSection />
    </main>
  );
}
