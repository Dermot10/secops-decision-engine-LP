"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -20, y: -20 });
  const [isText, setIsText] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const tag = el?.tagName?.toLowerCase();
      const isInput = tag === "input" || tag === "textarea";
      const isBtn = tag === "button" || tag === "a" || (el as HTMLElement)?.style?.cursor === "pointer";
      setIsText(isInput);
      setIsPointer(isBtn && !isInput);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: isText ? "2px" : isPointer ? "10px" : "8px",
        height: isText ? "18px" : isPointer ? "10px" : "8px",
        background: "#38bdf8",
        borderRadius: isText ? "1px" : "50%",
        transform: isText ? "translate(-50%, -50%)" : "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0.9,
        boxShadow: isPointer ? "0 0 10px rgba(56,189,248,0.6)" : "0 0 6px rgba(56,189,248,0.4)",
        transition: "width 0.1s ease, height 0.1s ease, border-radius 0.1s ease",
      }}
    />
  );
}