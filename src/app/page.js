import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/posts";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "fr";

  const content = {
    fr: {
      title: "Les Carnets de PL",
      heroText:
        "Un espace où je partage mes projets web, mes articles et mes réflexions sur le développement, le SEO et le numérique.",
      manifestTitle: "À propos du projet",
      manifest1:
        "Les Carnets de PL est un projet personnel où je rassemble mes réflexions, mes projets et mon travail autour du numérique.",
      manifest2:
        "À la fois développeur web et rédacteur, je combine technique et contenu pour explorer le web moderne.",
      manifest3:
        "Ce site est une vitrine, un espace de réflexion et un laboratoire d’expérimentation.",
      navBlog: "Blog",
      navProjects: "Projets",
      navAbout: "À propos",
      latestPosts: "Derniers articles",
      seeAll: "Voir tous les articles →",
    },
    en: {
      title: "PL’s Notebooks",
      heroText:
        "A space where I share my web projects, articles, and reflections on development, SEO and the digital world.",
      manifestTitle: "About the project",
      manifest1:
        "PL’s Notebooks is a personal project gathering my reflections, projects and digital work.",
      manifest2:
        "As a developer and writer, I combine technical and editorial work to explore the modern web.",
      manifest3:
        "This site is a portfolio, a reflection space and an experimental lab.",
      navBlog: "Blog",
      navProjects: "Projects",
      navAbout: "About",
      latestPosts: "Latest articles",
      seeAll: "View all articles →",
    },
  };

  const t = content[lang];
  const posts = getPosts(lang).slice(0, 3);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-image">
            <Image
              src="/images/moi.jpg"
              alt="Pascal Lévesque"
              width={300}
              height={350}
              className="hero-avatar"
              priority
            />
          </div>

          <div className="hero-text-block">
            <img
              src="/images/logo.jpg"
              alt={t.title}
              className="hero-logo"
            />

            <h1>{t.title}</h1>

            <p className="hero-text">{t.heroText}</p>
          </div>

        </div>
      </section>

      {/* MANIFESTE */}
      <section className="manifest">
        <h2>{t.manifestTitle}</h2>

        <p className="manifest-intro">{t.manifest1}</p>
        <p>{t.manifest2}</p>
        <p>{t.manifest3}</p>

        <p className="hero-links">
          <Link href="/blog">{t.navBlog}</Link> ·{" "}
          <Link href="/projects">{t.navProjects}</Link> ·{" "}
          <Link href="/about">{t.navAbout}</Link>
        </p>
      </section>

      {/* BLOG PREVIEW */}
      <section className="blog-preview">
        <h2>{t.latestPosts}</h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">

              <Link href={`/blog/${post.slug}`}>

                {post.image && (
                  <div className="blog-image-wrapper">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={220}
                      className="blog-image"
                    />
                  </div>
                )}

                <div className="blog-content">
                  <h3>{post.title}</h3>

                  {post.description && (
                    <p className="blog-desc">{post.description}</p>
                  )}
                </div>

              </Link>

            </article>
          ))}
        </div>

        <Link href="/blog" className="see-more">
          {t.seeAll}
        </Link>
      </section>

    </main>
  );
}