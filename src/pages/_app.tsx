import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { wrapper } from "../store";

import GlobalLayout from "../layouts/index";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <GlobalLayout>
        <Component {...props.pageProps} />
      </GlobalLayout>
    </Provider>
  );
};

export default MyApp;
