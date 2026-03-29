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
      <h3 className="text-xl mb-6 font-extrabold text-midnight">
        Articles <span className="text-gold">connexes</span>
      </h3>
      <div className="space-y-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex items-start gap-4 bg-cream rounded-2xl p-5 border border-gray-100 hover:border-gold/30 transition group"
          >
            <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-midnight group-hover:text-gold transition">{post.title}</h4>
              <p className="text-xs text-gray-400 mt-1 line-clamp-1">{post.subtitle}</p>
              <span className="text-[10px] text-gray-400 mt-1 inline-block">{post.readTime} de lecture</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
