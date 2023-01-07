import { getAllPostsForHome } from "../lib/api";
import Hero from "../components/hero";
import About from "../components/about";
import News from "../components/news";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs";

const getPosts = async (): Promise<{ edges: any }> => {
  const allPosts = await getAllPostsForHome(false);

  return allPosts;
};

export default async function Home() {
  const { edges } = await getPosts();

  return (
    <>
      <Hero />
      <About />
      <News
        newsArray={(edges as Array<unknown>)
          .filter(
            //@ts-ignore
            (edge) => edge.node.categories.edges[0].node.name === "Hírek"
          )
          //@ts-ignore
          .map((edge) => edge.node)}
      />
    </>
  );
}
