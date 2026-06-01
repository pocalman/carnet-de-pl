import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Projets() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "fr";

  const t = {
    fr: {
      title: "Mes projets",
      subtitle:
        "Études de cas SEO, développement web et expérimentations techniques.",
      intro:
        "Voici quelques projets et analyses réalisés autour du SEO, du contenu et du développement web.",
      caseStudy: "Audit SEO des Rôtisseries Benny & Au Coq",
      caseStudyDesc:
        "Analyse complète SEO technique, SEO local et optimisation IA du site des Rôtisseries Benny & Au Coq.",
      readMore: "Voir l’étude de cas →",
    },
    en: {
      title: "My Projects",
      subtitle:
        "SEO case studies, web development and technical experiments.",
      intro:
        "Here are some projects and analyses focused on SEO, content and web development.",
      caseStudy: "SEO Audit of Benny & Au Coq Restaurants",
      caseStudyDesc:
        "Complete technical SEO, local SEO and AI optimization analysis of the Benny & Au Coq website.",
      readMore: "View case study →",
    },
  };

  const content = t[lang];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      {/* HEADER */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          {content.title}
        </h1>

        <p style={{ fontSize: "20px", color: "#aaa", marginBottom: "16px" }}>
          {content.subtitle}
        </p>

        <p style={{ maxWidth: "700px", margin: "0 auto", color: "#bbb" }}>
          {content.intro}
        </p>
      </section>

      {/* GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
  <article
  style={{
    border: "1px solid #222",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#111",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      {/* TEXTE */}
      <div style={{ padding: "20px", flex: 1 }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
          {content.caseStudy}
        </h2>

        <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6" }}>
          {content.caseStudyDesc}
        </p>

        <Link
          href="/projects/benny-au-coq"
          style={{
            display: "inline-block",
            marginTop: "12px",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          {content.readMore}
        </Link>
      </div>

      {/* IMAGE À DROITE */}
      <div
        style={{
          width: "180px",
          minWidth: "180px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
          }}
        >
          <Image
            src="/images/benny-au-coq.jpg"
            alt="Audit SEO Benny & Au Coq"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  </div>
</article>
      </section>
    </main>
  );
}