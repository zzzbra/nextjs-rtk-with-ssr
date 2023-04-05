import type { NextPage } from "next";
import Head from "next/head";
import { useGetShopDataQuery } from "../services/shop";

const IndexPage: NextPage = () => {
  const { data, error, isLoading } = useGetShopDataQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <ol>
        {data?.products?.map((p) => {
          // use global view port logic to determine ideal image dimensions to use here

          const [firstImage] = p.images;
          return (
            <li key={p.id}>
              <img src={firstImage.src} />
              <h3>{p.title}</h3>
            </li>
          );
        })}
      </ol>

      {/* TODO: delete commented out code */}
      {/* <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
};

export default IndexPage;
