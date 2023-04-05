import type { NextApiHandler } from "next";
import data from "../../../mock/shopData.json";

const shopApiHandler: NextApiHandler = async (request, response) => {
  console.log("shopApiHandler");
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  response.json({ ...data });
};

export default shopApiHandler;
