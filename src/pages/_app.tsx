import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { store } from "../store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
