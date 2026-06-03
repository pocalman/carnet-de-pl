"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitcher from "./LangSwitcher";
import { Playfair_Display } from "next/font/google";

const logoFont = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("fr");

  const pathname = usePathname();

useEffect(() => {
  const readLang = () => {
    const match = document.cookie
      .split("; ")
      .find((c) => c.startsWith("lang="));

    return match ? match.split("=")[1] : "fr";
  };

  const update = () => setLang(readLang());

  update(); // initial load

  window.addEventListener("lang-change", update);

  return () => window.removeEventListener("lang-change", update);
}, []);

  const t = {
    fr: {
      home: "Accueil",
      projects: "Projets",
      blog: "Blog",
      about: "À propos",
      title: "Les Carnets de PL",
    },
    en: {
      home: "Home",
      projects: "Projects",
      blog: "Blog",
      about: "About",
      title: "PL’s Notebooks",
    },
  };

  const text = t[lang];

  // scroll effect (OK)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* LOGO */}
      <Link href="/" className="logo">
        <div className="logo-wrapper">
          <img src="/images/logo.jpg" alt="logo" />
        </div>

        <span className={`logo-text ${logoFont.className}`}>
          {text.title}
        </span>
      </Link>

      {/* DESKTOP LINKS */}
      <div className="nav-links">
        <Link className={pathname === "/" ? "active" : ""} href="/">
          {text.home}
        </Link>

        <Link className={pathname === "/projects" ? "active" : ""} href="/projects">
          {text.projects}
        </Link>

        <Link className={pathname === "/blog" ? "active" : ""} href="/blog">
          {text.blog}
        </Link>

        <Link className={pathname === "/about" ? "active" : ""} href="/about">
          {text.about}
        </Link>
      </div>

      {/* RIGHT */}
      <div className="right">
        <LangSwitcher />

        <button className="burger" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>
            {text.home}
          </Link>

          <Link href="/projects" onClick={() => setOpen(false)}>
            {text.projects}
          </Link>

          <Link href="/blog" onClick={() => setOpen(false)}>
            {text.blog}
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            {text.about}
          </Link>
        </div>
      )}
    </nav>
  );
}