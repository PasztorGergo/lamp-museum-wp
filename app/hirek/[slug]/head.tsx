import React from "react";
import { getOnePost } from "../../../lib/api";

const NewsHead = async ({ params }: { params: { slug: string } }) => {
  const post = await getOnePost(params.slug);

  return (
    <>
      <link rel="icon" href="/icon.png" />
      <title>{`${post.edges[0].node.title}  | Villamostechnikai Gyűjtemény`}</title>
    </>
  );
};

export default NewsHead;
