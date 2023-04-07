import React from "react";
import { useRouter } from "next/router";

import { addItem } from "../../store/cartSlice";
import { useGetShopDataQuery } from "../../store/shopApiSlice";
import Loader from "../../components/Loader";
import { useAppDispatch } from "../../hooks";

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pid } = router.query;

  // FIXME: Overfetching for now, build out SSR funct after store slices have been defined
  const { data, isLoading, error } = useGetShopDataQuery();

  if (isLoading) return <Loader />;

  if (error) {
    return <h1>Error: {JSON.stringify(error)}</h1>;
  }

  const product = data?.products.find(
    ({ id }) => id === parseInt(pid as string),
  );

  if (product === undefined) {
    return <h1>Error: 404</h1>;
  }

  const [firstImage] = product.images;
  return (
    <div className="content-container pt-8 grid grid-cols-12 gap-4 self-start">
      {/* TODO: use global window dimensions detection to pick best size OR 
      handle via server side props */}
      {/* Future implementation detail: timed carousel through 
      size-appropriate images */}
      <img
        src={firstImage.src}
        alt={`Image of ${product.title}`}
        className="col-span-7 rounded"
      />
      <div className="bg-white col-span-5 rounded self-start p-4">
        <h2 className="text-4xl mb-4">{product.title}</h2>
        <h3 className="mb-4">About</h3>
        <p className="mb-4">{product.body}</p>
        <button
          className="text-2xl w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
          onClick={() => dispatch(addItem(pid))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
