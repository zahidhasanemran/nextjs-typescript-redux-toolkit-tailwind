import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { AppWrapper } from "redux/store";
import { FC } from "react";
import { store } from "redux/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  // const { store, props } = AppWrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
