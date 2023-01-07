import { Title } from "@mantine/core";
import NewsCard from "./newsCard";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Title order={2} className="text-[#343a40]"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <NewsCard
            key={node.slug}
            title={node.title}
            img={node.featuredImage?.node.sourceUrl}
            date={node.date}
            text={node.excerpt}
            src={node.slug}
          />
        ))}
      </div>
    </section>
  );
}
