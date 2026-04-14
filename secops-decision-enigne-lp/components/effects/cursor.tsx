"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    let mx = 0, my = 0, rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      }
    };

    document.addEventListener("mousemove", move);

    function anim() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      requestAnimationFrame(anim);
    }
    anim();

    const interactive = document.querySelectorAll("button, a, input");

    interactive.forEach(el => {
      el.addEventListener("mouseenter", () => {
        if (!ring) return;
        ring.style.width = "48px";
        ring.style.height = "48px";
      });
      el.addEventListener("mouseleave", () => {
        if (!ring) return;
        ring.style.width = "32px";
        ring.style.height = "32px";
      });
    });

  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  );
}