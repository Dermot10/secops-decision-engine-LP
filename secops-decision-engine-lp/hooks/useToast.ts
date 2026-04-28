"use client";

import { useState } from "react";

type ToastMode = "signup" | "paid" | null;

export function useToast() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<ToastMode>(null);

  const hide = () => {
    setShow(false);
    setMode(null);
  };

  const showSignupToast = () => {
    setMode("signup");
    setShow(true);
  };

  const showPaidToast = () => {
    setMode("paid");
    setShow(true);
  };

  return {
    show,
    mode,
    hide,
    showSignupToast,
    showPaidToast,
  };
}