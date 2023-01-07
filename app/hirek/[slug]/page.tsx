import Container from "../../../components/container";
import PostBody from "../../../components/post-body";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import SectionSeparator from "../../../components/section-separator";
import Tags from "../../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../../lib/api";
import News from "../../../components/news";

const getPost = async ({ params, preview = false, previewData }) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
  };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const {
    props: { posts, post },
  } = await getPost({
    params,
    preview: false,
    previewData: false,
  });

  return (
    <>
      <article>
        <Container>
          <PostHeader
            title={post.title}
            coverImage={post.featuredImage}
            date={post.date}
          />
        </Container>
        <PostBody content={post.content} />
        <footer>
          {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
        </footer>
      </article>

      <SectionSeparator />
      {posts.edges.length > 0 && (
        <News
          newsArray={(posts.edges as Array<unknown>)
            .filter(
              //@ts-ignore
              (edge) => edge.node.categories.edges[0].node.name === "Hírek"
            )
            //@ts-ignore
            .map((edge) => edge.node)}
        />
      )}
    </>
  );
}

export const generateStaticParams = async () => {
  const allPosts = await getAllPostsWithSlug();

  return allPosts.edges.map(({ node }) => ({
    slug: node.slug,
  }));
};
