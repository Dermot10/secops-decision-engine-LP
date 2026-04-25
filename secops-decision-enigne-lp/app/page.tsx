import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import TriageShowcase from "@/components/sections/TriageShowcase";
import Pipeline from "@/components/sections/Pipeline";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ background: "#06080c", minHeight: "100vh", color: "#e2e8f0" }}>
      <Navbar />
      <Hero />
      <PainPoints />
      <TriageShowcase />
      <Pipeline />
      <CTA />
      <Footer />
    </main>
  );
}