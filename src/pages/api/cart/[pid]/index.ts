import { writeFileSync } from "fs";
import type { NextApiHandler } from "next";
import cart from "../../../../../mock/cart.json";

const cartItemApiHandler: NextApiHandler = async (request, response) => {
  const { pid } = request.body as string;
  console.log("pid:", pid);
  // if (request.method === "post") {
  // }
  // else if (request.method === "delete") {
  //   let found = Object.entries(cart).find(([id]) => id === pid);
  //   const count = found?.[1];
  //   if (count === 1) {
  //     delete cart[pid];
  //   } else {
  //     cart[pid] = count - 1;
  //   }
  //   writeFileSync(
  //     "../../../../../mock/cart.json",
  //     JSON.stringify(cart, null, 4),
  //   );
  // }

  response.json(cart);
};

export default cartItemApiHandler;
