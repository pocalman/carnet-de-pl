"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LangSwitcher() {
  const [lang, setLang] = useState("fr");
  const router = useRouter();

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="))
      ?.split("=")[1];

    if (saved) setLang(saved);
  }, []);

const changeLang = (l) => {
  document.cookie = `lang=${l}; path=/; max-age=31536000`;
  setLang(l);

  window.dispatchEvent(new Event("lang-change"));
  router.refresh();
};

  return (
    <div className="lang-switcher">
      <button onClick={() => changeLang("fr")} className={lang === "fr" ? "active" : ""}>
        FR
      </button>

      <span>/</span>

      <button onClick={() => changeLang("en")} className={lang === "en" ? "active" : ""}>
        EN
      </button>
    </div>
  );
}
