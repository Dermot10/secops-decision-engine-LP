"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Store flag so HomeClient can show paid toast on redirect
    localStorage.setItem("paid", "true");
    router.replace("/");
  }, [router]);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#06080c",
      fontFamily: "'IBM Plex Mono', monospace",
      color: "#38bdf8",
      fontSize: "13px",
    }}>
      Payment confirmed — redirecting…
    </main>
  );
}