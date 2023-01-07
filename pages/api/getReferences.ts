import { NextApiRequest, NextApiResponse } from "next";
import { getAllReferences } from "../../lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(403).send("Bad request");
  }
  const data = await getAllReferences();

  return res.status(200).json({ data });
}
