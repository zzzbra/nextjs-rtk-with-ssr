import type { NextApiHandler } from "next";
import data from "../../../../../mock/shopData.json";

const productApiHandler: NextApiHandler = async (request, response) => {
  const pid = request.query.pid;
  const product = data.products.find(
    ({ id }) => id === parseInt(pid as string),
  );

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  response.json(product);
};

export default productApiHandler;
