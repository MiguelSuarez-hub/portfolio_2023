"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageButton = () => {
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={handleLanguageButton}
      className="bg-cyan-500/30 p-2 w-10 rounded-lg text-white hover:scale-105"
    >
      <p>{language === "EN" ? "ES" : "EN"}</p>
    </button>
  );
};

export default LanguageButton;
