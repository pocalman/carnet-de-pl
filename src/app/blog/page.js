import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/posts";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Blog() {

  // ✅ IMPORTANT
  const cookieStore = await cookies();

  const lang = cookieStore.get("lang")?.value || "fr";

  const content = {
    fr: {
      title: "Blog",
      subtitle: "Articles sur le web, le SEO et le développement",
      readMore: "Lire l’article →",
    },

    en: {
      title: "Blog",
      subtitle: "Articles about web development, SEO and digital",
      readMore: "Read article →",
    },
  };

  const t = content[lang];

  const posts = getPosts(lang);

  return (
    <main className="blog-container">

      <header className="blog-header">
        <h1>{t.title}</h1>
        <p className="blog-subtitle">{t.subtitle}</p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">

            <Link
              href={`/blog/${post.slug}`}
              className="blog-card-link"
            >

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

                <p className="blog-date">
                  {post.date}
                </p>

                <h2>{post.title}</h2>

                {post.description && (
                  <p className="blog-desc">
                    {post.description}
                  </p>
                )}

                <span className="read-more">
                  {t.readMore}
                </span>

              </div>

            </Link>

          </article>
        ))}
      </div>

    </main>
  );
}