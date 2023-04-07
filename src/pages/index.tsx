import type { NextPage } from "next";
import Head from "next/head";
import { useGetShopDataQuery } from "../store/shopApiSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { wrapper } from "../store";

const IndexPage: NextPage = () => {
  const { data, error, isLoading } = useGetShopDataQuery();

  if (isLoading) return <Loader />;

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, ...rest }) => {
      // await store.dispatch(setAuthState(false));
      console.log("State on server", store.getState());
      console.log("other stuff on the store:", rest);
      return {
        props: {},
      };
    },
);

export default IndexPage;
