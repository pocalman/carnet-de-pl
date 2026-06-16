import "./globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Les Carnets de PL",
    template: "%s | Les Carnets de PL",
  },
  description:
    "Blogue consacré au développement web, au SEO, à Next.js et aux projets numériques de Pascal Lévesque.",
  keywords: [
    "SEO",
    "Next.js",
    "React",
    "Développement web",
    "Blog",
    "Programmation",
  ],
};

export default async function RootLayout({ children }) {
  const lang = (await cookies()).get("lang")?.value || "fr";

  return (
    <html lang={lang}>
      <body
        className={inter.className}
        style={{
          background: "#0d0d0d",
          color: "#eaeaea",
        }}
      >
        <Navbar />

        <main style={{ padding: "40px 20px", minHeight: "80vh" }}>
          {children}
        </main>

<footer className="footer">
  <div className="footer-content">
    {/* LEFT → LinkedIn avec logo */}
    <a
      href="https://www.linkedin.com/in/pascal-l%C3%A9vesque-9745994a/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.039 0 3.601 2.001 3.601 4.604v5.591z" />
      </svg>

      <span>LinkedIn</span>
    </a>

    {/* CENTER */}
    <p className="copyright">
      © {new Date().getFullYear()} Les Carnets de PL
    </p>
  </div>
</footer>
      </body>
    </html>
  );
}