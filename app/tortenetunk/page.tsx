import React from "react";
import History from "../../components/history";
import { getAllHistory } from "../../lib/api";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs";

const AllHistory = async () => {
  const { edges } = await getAllHistory();
  return edges;
};

const Tortenetunk = async () => {
  const events: Array<unknown> = await AllHistory();
  return (
    <>
      <History events={events} />
    </>
  );
};

export default Tortenetunk;
