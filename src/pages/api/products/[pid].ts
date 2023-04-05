import type { NextApiHandler } from "next";
import data from "../../../../mock/shopData.json";

const productApiHandler: NextApiHandler = async (request, response) => {
  const pid = request.body.pid;
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  response.json({ ...data.products.find(({ id }) => id === pid) });
};

export default productApiHandler;
