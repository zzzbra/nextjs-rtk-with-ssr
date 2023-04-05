import type { NextPage } from "next";
import Head from "next/head";
import { useGetShopDataQuery } from "../services/shop";
import ProductCard from "../components/ProductCard";

const IndexPage: NextPage = () => {
  const { data, error, isLoading } = useGetShopDataQuery();

  // TODO: replace with global loader
  if (isLoading) {
    return (
      <div className="content-container w-full h-full flex justify-center flex-col items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  // TODO: replace with global modal experience
  if (error) {
    return <h1>Error: {JSON.stringify(error)}</h1>;
  }

  return (
    <div>
      <Head>
        <title>Fast Growing Trees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ol className="mt-5 content-container grid grid-cols-3 gap-[30px]">
        {data?.products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ol>
    </div>
  );
};

export default IndexPage;
