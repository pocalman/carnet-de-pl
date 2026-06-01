import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function About() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "fr";

  const t = {
    fr: {
      title: "À propos",
      intro:
        "Je suis développeur web, spécialiste SEO et créateur de contenu.",
      text:
        "J’aide les entreprises à améliorer leur visibilité en ligne grâce à des stratégies SEO modernes adaptées à l’IA et aux nouveaux moteurs de recherche.",
      back: "← Retour à l’accueil",
    },

    en: {
      title: "About",
      intro:
        "I am a web developer, SEO specialist and content creator.",
      text:
        "I help businesses improve their online visibility through modern SEO strategies adapted to AI and next-generation search engines.",
      back: "← Back to home",
    },
  };

  const content = t[lang];

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "24px",
        }}
      >
        {content.title}
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#aaa",
          lineHeight: "1.7",
          marginBottom: "24px",
        }}
      >
        {content.intro}
      </p>

      <p
        style={{
          lineHeight: "1.9",
          color: "#ccc",
          maxWidth: "700px",
        }}
      >
        {content.text}
      </p>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "40px",
        }}
      >
        {content.back}
      </Link>
    </main>
  );
}