import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts(lang = "fr") {
  const dir = path.join(process.cwd(), `content/blog/${lang}`);

  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    return {
      ...data,
      slug: file.replace(".md", ""),
    };
  });
}

export function getPostBySlug(slug, lang = "fr") {
  const filePath = path.join(
    process.cwd(),
    `content/blog/${lang}/${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    // fallback FR
    const fallback = path.join(
      process.cwd(),
      `content/blog/fr/${slug}.md`
    );

    if (!fs.existsSync(fallback)) return null;

    const content = fs.readFileSync(fallback, "utf-8");
    const { data, content: md } = matter(content);

    return { ...data, content: md, fallback: true };
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: md } = matter(content);

  return { ...data, content: md };
}

