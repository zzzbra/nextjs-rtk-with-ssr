import Head from "next/head";
import { getRunningQueryThunk, getShopData } from "../store/shopApiSlice";
import ProductCard from "../components/ProductCard";
import { wrapper } from "../store";
import { ShopApiData } from "../types";

type Props = {
  data: ShopApiData;
  error: any;
};
const IndexPage: React.FC<Props> = ({ data, error }) => {
  if (error) {
    console.error(error);
    return <h1>Error: {JSON.stringify(error)}</h1>;
  }

  return (
    <div>
      <Head>
        <title>Fast Growing Trees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ol className="mt-5 content-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {data?.products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ol>
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    let { pid } = context.params ?? {};

    if (!pid || Array.isArray(pid)) {
      pid = "";
    }

    const { data, error } = await store.dispatch(getShopData.initiate());

    return {
      props: {
        data,
      },
    };
  },
);
