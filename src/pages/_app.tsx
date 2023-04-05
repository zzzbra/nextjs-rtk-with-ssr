import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { store } from "../store";

import GlobalLayout from "../layouts/index";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </Provider>
  );
}
