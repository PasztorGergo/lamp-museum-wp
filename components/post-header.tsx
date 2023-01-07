import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
}: {
  title: string;
  coverImage: { node: { sourceUrl: string } };
  date?: string;
}) {
  return (
    <header className="mt-32">
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      {date && (
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-lg text-[#343a40]">
            Közzétéve <Date dateString={date} />
          </div>
        </div>
      )}
    </header>
  );
}
