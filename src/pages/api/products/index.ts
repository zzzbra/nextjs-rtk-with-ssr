import type { NextApiHandler } from "next";
import data from "../../../../mock/shopData.json";

const productsApiHandler: NextApiHandler = async (request, response) => {
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  response.json({ ...data.products });
};

export default productsApiHandler;
