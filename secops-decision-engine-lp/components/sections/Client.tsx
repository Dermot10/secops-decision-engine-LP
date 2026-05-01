"use client";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/ui/Toast";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import TriageShowcase from "@/components/sections/TriageShowcase";
import Timeline from "@/components/sections/Timeline";
import Pipeline from "@/components/sections/Pipeline";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Cursor from "@/components/effects/Cursor";

export default function HomeClient() {
  const toast = useToast();

  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero toast={toast} />
      <PainPoints />
      <Timeline />
      <TriageShowcase />
      <Pipeline />
      <CTA toast={toast} />
      <Footer />
      <Toast show={toast.show} mode={toast.mode} onClose={toast.hide} />
    </main>
  );
}