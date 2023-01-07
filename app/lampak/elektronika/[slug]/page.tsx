import React from "react";
import Container from "../../../../components/container";
import PostBody from "../../../../components/post-body";
import PostHeader from "../../../../components/post-header";
import { getAllLampsWithSlug, getLampBySlug } from "../../../../lib/api";

const getLamp = async (slug: string) => {
  const { edges } = await getLampBySlug(slug);

  return edges[0];
};

const Fenyforras = async ({ params }: { params: { slug: string } }) => {
  const { node: post } = await getLamp(params.slug);
  return (
    <main>
      <article>
        <Container>
          <PostHeader title={post.title} coverImage={post.featuredImage} />
        </Container>
        <PostBody content={post.content} />
      </article>
    </main>
  );
};

export async function generateStaticParams() {
  const lamps = await getAllLampsWithSlug("elektronika");

  return lamps.edges.map(({ node }) => ({ slug: node.slug }));
}

export default Fenyforras;
