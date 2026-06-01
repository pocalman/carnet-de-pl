// src/lib/lang.js

export function getLang() {
  if (typeof window === "undefined") return "fr";

  const lang = navigator.language.toLowerCase();
  return lang.startsWith("en") ? "en" : "fr";
}