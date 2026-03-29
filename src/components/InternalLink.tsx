import Link from "next/link";
import { getPostBySlug } from "@/data/blogPosts";

interface InternalLinkProps {
  slug: string;
  children?: React.ReactNode;
}

/**
 * Internal link component for blog maillage interne.
 * Automatically resolves blog post title if no children provided.
 */
export default function InternalLink({ slug, children }: InternalLinkProps) {
  const post = getPostBySlug(slug);
  const label = children ?? post?.title ?? slug;

  return (
    <Link
      href={`/blog/${slug}`}
      className="text-gold hover:text-gold-dark underline underline-offset-2 transition font-semibold"
    >
      {label}
    </Link>
  );
}
