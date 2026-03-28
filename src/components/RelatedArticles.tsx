import Link from "next/link";
import { getRelatedPosts } from "@/data/blogPosts";

interface RelatedArticlesProps {
  currentSlug: string;
  limit?: number;
}

export default function RelatedArticles({ currentSlug, limit = 4 }: RelatedArticlesProps) {
  const related = getRelatedPosts(currentSlug, limit);

  if (related.length === 0) return null;

  return (
    <div className="my-12">
      <h3 className="text-xl font-bold text-navy mb-6">
        Articles <span className="text-primary">connexes</span>
      </h3>
      <div className="space-y-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-navy group-hover:text-primary transition">{post.title}</h4>
              <p className="text-xs text-dark/40 mt-1 line-clamp-1">{post.subtitle}</p>
              <span className="text-[10px] text-dark/40 mt-1 inline-block">{post.readTime} de lecture</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
