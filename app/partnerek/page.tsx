import React from "react";
import Partnerek from "../../components/partnerek";
import { getAllPartner } from "../../lib/api";

const AllPartner = async () => {
  const data = await getAllPartner();

  return data.edges;
};

const Tamogatoink = async () => {
  const supports = await AllPartner();
  return (
    <>
      <Partnerek supports={supports} />
    </>
  );
};

export default Tamogatoink;
