import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Timeline from "@/components/sections/Timeline";
import TriageShowcase from "@/components/sections/TriageShowcase";
import Pipeline from "@/components/sections/Pipeline";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Cursor from "@/components/effects/Cursor";

export default function Home() {
  return (
    <main style={{ background: "#06080c", minHeight: "100vh", color: "#e2e8f0" }}>
      <Cursor />
      <Navbar />
      <Hero />
      <PainPoints />
      <Timeline />
      <TriageShowcase />
      <Pipeline />
      <CTA />
      <Footer />
    </main>
  );
}