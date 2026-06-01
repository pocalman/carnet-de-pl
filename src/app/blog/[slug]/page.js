import { getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function PostPage({ params }) {
  const { slug } = await params;

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "fr";

  const post = getPostBySlug(slug, lang);

  if (!post) {
    return <p>Article introuvable</p>;
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto" }}>
      {post.fallback && (
        <p style={{ color: "orange" }}>
          Traduction non disponible, affichage en français.
        </p>
      )}

      <h1>{post.title}</h1>

      <p style={{ color: "#aaa", fontSize: "14px" }}>
        {post.date}
      </p>

      {post.image && (
        <div style={{ margin: "20px 0" }}>
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            width={800}
            height={450}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </div>
      )}

      {post.description && (
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          {post.description}
        </p>
      )}

      <div
  style={{
    lineHeight: "1.8",
    fontSize: "18px",
  }}
>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </main>
  );
}
