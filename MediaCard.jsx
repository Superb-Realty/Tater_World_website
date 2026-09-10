/**
 * MediaCard.jsx
 * Reusable MediaCard component for React implementation
 * Uses Tailwind CSS for styling
 */

export default function MediaCard({ article }) {
  if (!article) return null;
// ok
  return (
    <article className="bg-[#FAF7F2] border border-[#e5e0d8] rounded-[16px] overflow-hidden transition-all duration-400 hover:border-[#8B6914] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
      {/* Title Section */}
      <div className="px-6 py-5 bg-[#FAF7F2] md:px-5 sm:px-4">
        <h3 className="font-serif text-xl md:text-lg sm:text-base font-medium text-[#1a1410] line-clamp-2 leading-[1.4]">
          {article.title}
        </h3>
      </div>

      {/* Image Section - Inset with margin */}
      <div className="px-6 pb-4 md:px-[14px] sm:px-3">
        <div className="w-full h-[220px] md:h-[180px] sm:h-[160px] bg-gradient-to-br from-[#f0f0f0] to-[#e8e6e1] rounded-[12px] overflow-hidden flex items-center justify-center">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center transition-transform duration-400 hover:scale-[1.03]"
            />
          ) : (
            <span className="text-4xl text-[rgba(0,0,0,0.15)]">•</span>
          )}
        </div>
      </div>

      {/* Metadata Row - Date + Tags */}
      <div className="px-6 pb-4 flex justify-between items-center gap-4 md:px-5 sm:px-4">
        <span className="inline-flex items-center px-4 py-2 border border-[#c8b89a] rounded-full text-xs md:text-xs font-semibold text-[#1a1410] uppercase tracking-wider whitespace-nowrap">
          {article.date}
        </span>
        <span className="inline-flex items-center px-4 py-2 border border-[#c8b89a] rounded-full text-xs md:text-xs font-semibold text-[#1a1410] uppercase tracking-wider max-w-[220px] truncate text-right">
          {article.tags || article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#e5e0d8] mx-6 md:mx-5 sm:mx-4" />

      {/* Snippet Section */}
      <div className="px-6 pt-4 pb-2 md:px-5 sm:px-4">
        <p className="text-sm font-light leading-[1.6] text-[#555] line-clamp-3">
          {article.summary}
        </p>
      </div>

      {/* Read More Button */}
      <div className="px-6 pb-6 md:px-5 sm:px-4">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#8B6914] rounded-[8px] text-xs font-bold text-[#8B6914] uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[rgba(139,105,20,0.08)] hover:border-[#6B5410] hover:text-[#6B5410]"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}

/**
 * MediaCardGrid.jsx
 * Container component for responsive media card grid
 */

export function MediaCardGrid({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 py-8 pb-4">
      {articles.map((article) => (
        <MediaCard key={article.id} article={article} />
      ))}
    </div>
  );
}

/**
 * Usage Example:
 *
 * import MediaCard, { MediaCardGrid } from './MediaCard';
 *
 * // Single card
 * <MediaCard article={articleData} />
 *
 * // Grid of cards
 * <MediaCardGrid articles={mediaArticles} />
 *
 * ArticleData structure:
 * {
 *   id: "unique-id",
 *   category: "media",
 *   title: "Article Title",
 *   date: "April 2025",
 *   summary: "Brief summary...",
 *   image: "path/to/image.jpg",
 *   link: "https://external-link.com",
 *   tags: "Tag1, Tag2"
 * }
 */
