"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitcher from "./LangSwitcher";
import { Playfair_Display } from "next/font/google";

  const logoFont = Playfair_Display({subsets: ["latin"],weight: "600"});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();


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

        {/* texte disparaît sur mobile + shrink scroll */}
       <span className={`logo-text ${logoFont.className}`}>
  Les Carnets de PL
</span>
      </Link>

      {/* LINKS DESKTOP */}
      <div className="nav-links">
        <Link className={pathname === "/" ? "active" : ""} href="/">Accueil</Link>
        <Link className={pathname === "/projects" ? "active" : ""} href="/projects">Projets</Link>
        <Link className={pathname === "/blog" ? "active" : ""} href="/blog">Blog</Link>
        <Link className={pathname === "/about" ? "active" : ""} href="/about">À propos</Link>
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
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projets</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setOpen(false)}>À propos</Link>
        </div>
      )}
    </nav>
  );
}