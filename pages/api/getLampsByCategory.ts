import { NextApiRequest, NextApiResponse } from "next/types";
import { getAllLampsByCategory } from "../../lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(403).send("Action permitted");
  }

  const { type } = JSON.parse(req.body);
  const data: unknown = await getAllLampsByCategory(type);
  return res.status(200).json({ data });
}
