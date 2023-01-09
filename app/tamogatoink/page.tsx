import React from "react";
import Tamogatok from "../../components/tamogatoink";
import { getAllSupport } from "../../lib/api";

const supports = async () => {
  const { edges } = await getAllSupport();

  return edges;
};

const Tamogatoink = async () => {
  const sponsors = await supports();
  return (
    <>
      <Tamogatok sponsorArray={sponsors} />
    </>
  );
};

export default Tamogatoink;
