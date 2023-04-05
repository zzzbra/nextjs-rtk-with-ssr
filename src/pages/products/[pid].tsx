import React from "react";
import { useRouter } from "next/router";
import { useGetProductDataQuery } from "../../services/shop";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { data } = useGetProductDataQuery(pid);

  // TODO: if there's extra time, mock out individual product query as well.

  return (
    <div className="content-container">
      <h2>Product Page: {pid}</h2>
    </div>
  );
};

export default ProductPage;
