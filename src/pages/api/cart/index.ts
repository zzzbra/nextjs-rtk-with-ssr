import type { NextApiHandler } from "next";
import cart from "../../../../mock/cart.json";

const cartApiHandler: NextApiHandler = async (request, response) => {
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  response.json(cart);
};

export default cartApiHandler;
