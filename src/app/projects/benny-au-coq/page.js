import { cookies } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Audit SEO Benny & Au Coq",
  description:
    "Étude de cas SEO technique, local et IA sur Benny & Au Coq",
};

export default async function Page() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "fr";

  const content = {
    fr: {
      back: "← Retour aux projets",

      author:
        "Développeur web, spécialiste SEO et rédacteur, combinant analyse, stratégie et création de contenu pour améliorer la performance en ligne.",

      date: "27 mai 2026",

      title:
        "Audit SEO du site des Rôtisseries Benny & Au Coq : analyse complète et plan d’optimisation",

      intro1:
        "Dans le cadre de cette étude de cas SEO, j’ai analysé le site des Rôtisseries Benny & Au Coq afin d’identifier les leviers d’amélioration en SEO technique, SEO local et GEO (optimisation pour les moteurs de recherche traditionnels et les environnements d’IA).",

      intro2:
        "L’objectif : comprendre comment améliorer la visibilité organique, les performances mobiles et la capacité du site à capter des requêtes locales à forte intention.",

      intro3:
        "Cette analyse a été réalisée sans accès aux données internes (Google Analytics 4 et Google Search Console), en m’appuyant sur des outils publics et spécialisés tels que Google PageSpeed Insights, GTmetrix, W3C Validator, Screaming Frog et SEMrush.",

      s1: "1. Performance web : un bon socle, mais un frein mobile important",

      s1a: "Une base technique solide sur desktop",

      s1b:
        "Les analyses montrent que le site repose sur une fondation SEO technique globalement saine. Les scores desktop sont généralement bons et les Core Web Vitals sont globalement conformes aux standards de Google.",

      s1c:
        "Cela indique que l’indexation et la compréhension du site par les moteurs de recherche ne sont pas problématiques.",

      s1d: "Des performances mobiles en retrait",

      s1e:
        "Certaines pages clés affichent des scores mobiles faibles avec des temps de chargement très élevés.",

      s1f:
        "Dans certains cas, le Largest Contentful Paint (LCP) dépasse 10 secondes, ce qui est largement au-dessus des recommandations de Google.",

      s1g: "Principales causes identifiées",

      s1h:
        "JavaScript trop volumineux ou inutilisé, CSS non optimisé, ressources bloquant le rendu initial, pages lourdes et images non optimisées.",

      s1i:
        "Résultat : une expérience mobile ralentie et une interactivité retardée.",

      s2:
        "2. Structure HTML : des incohérences dans les balises de titres",

      s2a:
        "L’analyse du W3C Validator met en lumière certaines incohérences dans la hiérarchie des titres.",

      s2b:
        "Sur plusieurs pages, la structure H1 → H2 → H3 n’est pas toujours respectée.",

      s2c: "Impact SEO",

      s2d:
        "Ces problèmes peuvent réduire la clarté sémantique du contenu, compliquer la compréhension par Google et affecter légèrement l’accessibilité.",

      s3:
        "3. GTmetrix : des performances correctes mais freinées par les ressources",

      s3a:
        "GTmetrix confirme globalement les résultats de PageSpeed Insights.",

      s3b:
        "Les principaux problèmes concernent la surcharge JavaScript, les CSS inutilisés, les images lourdes et les ressources bloquant le rendu.",

      s4:
        "4. Screaming Frog : structure SEO globalement saine mais perfectible",

      s4a:
        "L’audit de crawl révèle un site bien structuré et indexable, avec une organisation logique des sections.",

      s4b:
        "Certaines optimisations restent nécessaires : duplication de balises H1/H2, métadonnées similaires et manque de différenciation entre certaines pages.",

      s5:
        "5. Données structurées (Schema.org) : un excellent point fort",

      s5a:
        "Le site dispose d’une base de données structurées solide et bien implémentée.",

      s5b:
        "L’enrichissement des données structurées pourrait améliorer davantage la visibilité dans les résultats enrichis Google.",

      s6:
        "6. SEMrush : forte présence de marque, potentiel hors marque à développer",

      s6a:
        "L’analyse SEMrush montre une forte domination des requêtes de marque et une bonne visibilité organique.",

      s6b:
        "Le SEO local fonctionne bien, mais peut être encore renforcé pour capter davantage de trafic non lié à la marque.",

      plan: "Plan d’optimisation SEO prioritaire",

      p1: "1. Optimisation des performances mobiles",

      p1a:
        "Réduire le JavaScript inutilisé, optimiser les CSS, différer les scripts non essentiels et optimiser les images critiques.",

      p2: "2. Structuration sémantique HTML",

      p2a:
        "Réorganiser la hiérarchie des titres et différencier les titles et meta descriptions.",

      p3: "3. Optimisation des images et médias",

      p3a:
        "Compression des images, conversion WebP et amélioration du lazy loading.",

      p4: "4. Renforcement du maillage interne",

      p4a:
        "Créer davantage de liens contextuels et renforcer les ancres locales.",

      p5: "5. Développement du SEO local (GEO SEO)",

      p5a:
        "Créer des pages locales enrichies et optimiser les requêtes géolocalisées.",

      conclusion: "Conclusion",

      c1:
        "Le site des Rôtisseries Benny & Au Coq dispose déjà d’une base SEO solide, notamment grâce à sa notoriété, son maillage local et sa structure technique globalement bien construite.",

      c2:
        "Cependant, son principal frein reste la performance mobile et le poids technique des ressources front-end.",

      c3:
        "En appliquant les optimisations proposées, le site pourrait améliorer significativement son expérience mobile, renforcer sa visibilité locale et mieux performer dans les moteurs de recherche et les environnements IA.",
    },

    en: {
      back: "← Back to projects",

      author:
        "Web developer, SEO specialist and content writer combining analysis, strategy and content creation to improve online performance.",

      date: "May 27, 2026",

      title:
        "SEO Audit of Benny & Au Coq: full analysis and optimization plan",

      intro1:
        "As part of this SEO case study, I analyzed the website of Rôtisseries Benny & Au Coq to identify opportunities for improvement in technical SEO, local SEO, and GEO optimization.",

      intro2:
        "The goal is to improve organic visibility, mobile performance, and the site’s ability to capture high-intent local queries.",

      intro3:
        "This analysis was conducted without access to internal analytics data, using public SEO tools such as Google PageSpeed Insights, GTmetrix, W3C Validator, Screaming Frog, and SEMrush.",

      s1:
        "1. Web Performance: Strong Foundation, but Mobile Limitations",

      s1a: "Strong desktop foundation",

      s1b:
        "The website has a solid technical SEO foundation with good desktop performance and acceptable Core Web Vitals.",

      s1c:
        "This indicates that indexing and crawlability are not major issues.",

      s1d: "Mobile performance remains weak",

      s1e:
        "Several important pages show low mobile scores and slow loading times.",

      s1f:
        "In some cases, Largest Contentful Paint exceeds 10 seconds.",

      s1g: "Main technical issues identified",

      s1h:
        "Heavy or unused JavaScript, unoptimized CSS, render-blocking resources, heavy pages, and oversized images.",

      s1i:
        "Result: slower mobile experience and delayed interactivity.",

      s2:
        "2. HTML Structure: Inconsistent Heading Hierarchy",

      s2a:
        "The W3C Validator analysis highlights inconsistencies in heading hierarchy.",

      s2b:
        "Across multiple pages, the H1 → H2 → H3 structure is not always respected.",

      s2c: "SEO impact",

      s2d:
        "These issues may reduce semantic clarity, complicate interpretation by search engines, and slightly affect accessibility.",

      s3:
        "3. GTmetrix: Good Performance Limited by Front-End Weight",

      s3a:
        "GTmetrix generally confirms the PageSpeed Insights results.",

      s3b:
        "The main issues involve excessive JavaScript, unused CSS, heavy images, and render-blocking resources.",

      s4:
        "4. Screaming Frog: Strong SEO Structure with Room for Improvement",

      s4a:
        "The crawl analysis reveals a generally well-structured and indexable website.",

      s4b:
        "Some optimizations are still required, including duplicate H1/H2 tags, similar metadata, and limited page differentiation.",

      s5:
        "5. Structured Data (Schema.org): A Strong Technical Asset",

      s5a:
        "The website has a solid and well-implemented structured data foundation.",

      s5b:
        "Additional structured data enhancements could improve visibility in Google rich results.",

      s6:
        "6. SEMrush: Strong Brand Visibility with Non-Branded Growth Potential",

      s6a:
        "SEMrush data shows strong branded search visibility and healthy organic traffic.",

      s6b:
        "Local SEO performs well but could still capture more non-branded traffic.",

      plan: "Priority SEO Optimization Plan",

      p1: "1. Mobile Performance Optimization",

      p1a:
        "Reduce unused JavaScript, optimize CSS, defer non-critical scripts, and optimize key images.",

      p2: "2. Improve HTML Semantic Structure",

      p2a:
        "Fix heading hierarchy and differentiate titles and meta descriptions.",

      p3: "3. Image and Media Optimization",

      p3a:
        "Compress images, convert to WebP, and improve lazy loading implementation.",

      p4: "4. Strengthen Internal Linking",

      p4a:
        "Add more contextual links and reinforce local anchor text.",

      p5: "5. Local SEO (GEO SEO) Expansion",

      p5a:
        "Create optimized local landing pages and target geo-focused keywords.",

      conclusion: "Conclusion",

      c1:
        "The Benny & Au Coq website already has a strong SEO foundation thanks to brand authority, local visibility, and a solid technical structure.",

      c2:
        "However, its main limitation remains mobile performance and front-end optimization.",

      c3:
        "By implementing the recommended improvements, the website could significantly improve mobile experience, strengthen local visibility, and perform better in both traditional and AI-powered search environments.",
    },
  };

  const t = content[lang];

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: "1.8",
      }}
    >
      <p style={{ marginBottom: "30px" }}>
        <Link href="/projects">{t.back}</Link>
      </p>

      <h1
        style={{
          fontSize: "42px",
          lineHeight: "1.2",
          marginBottom: "20px",
        }}
      >
        {t.title}
      </h1>

      <p style={{ color: "#888", marginBottom: "6px" }}>
        Pascal Lévesque
      </p>

      <p style={{ color: "#aaa", marginBottom: "20px" }}>
        {t.author}
      </p>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        {t.date}
      </p>

      <p>{t.intro1}</p>
      <p>{t.intro2}</p>
      <p>{t.intro3}</p>

      <h2>{t.s1}</h2>
      <h3>{t.s1a}</h3>
      <p>{t.s1b}</p>
      <p>{t.s1c}</p>

      <h3>{t.s1d}</h3>
      <p>{t.s1e}</p>
      <p>{t.s1f}</p>

      <h3>{t.s1g}</h3>
      <p>{t.s1h}</p>

      <p>
        <strong>{t.s1i}</strong>
      </p>

      <h2>{t.s2}</h2>
      <p>{t.s2a}</p>
      <p>{t.s2b}</p>

      <h3>{t.s2c}</h3>
      <p>{t.s2d}</p>

      <h2>{t.s3}</h2>
      <p>{t.s3a}</p>
      <p>{t.s3b}</p>

      <h2>{t.s4}</h2>
      <p>{t.s4a}</p>
      <p>{t.s4b}</p>

      <h2>{t.s5}</h2>
      <p>{t.s5a}</p>
      <p>{t.s5b}</p>

      <h2>{t.s6}</h2>
      <p>{t.s6a}</p>
      <p>{t.s6b}</p>

      <h2>{t.plan}</h2>

      <h3>{t.p1}</h3>
      <p>{t.p1a}</p>

      <h3>{t.p2}</h3>
      <p>{t.p2a}</p>

      <h3>{t.p3}</h3>
      <p>{t.p3a}</p>

      <h3>{t.p4}</h3>
      <p>{t.p4a}</p>

      <h3>{t.p5}</h3>
      <p>{t.p5a}</p>

      <h2>{t.conclusion}</h2>

      <p>{t.c1}</p>
      <p>{t.c2}</p>
      <p>{t.c3}</p>
    </main>
  );
}