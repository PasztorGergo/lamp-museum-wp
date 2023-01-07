import React from "react";
import { getLampBySlug } from "../../../../lib/api";

const Head = async ({ params }: { params: { slug: string } }) => {
  const { node: lamp } = (await getLampBySlug(params.slug)).edges[0];
  return (
    <>
      <title></title>
      <meta property="description" content={`${lamp.excerpt}`} />
      <meta property="og:description" content={`${lamp.excerpt}`} />
      <meta
        property="og:image"
        content={`${lamp.featuredImage?.node.sourceUrl}`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://lamp-museum.vercel.app/lampak/fenyforrasok/${params.slug}`}
      />
      <meta property="og:title" content={lamp.title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://lamp-museum.vercel.app/lampak/fenyforrasok/${params.slug}`}
      />
      <meta property="twitter:title" content={lamp.title} />
      <meta property="twitter:description" content={`${lamp.excerpt}`} />
      <meta
        property="twitter:image"
        content={`${lamp.featuredImage.node.sourceUrl}`}
      />
    </>
  );
};

export default Head;
