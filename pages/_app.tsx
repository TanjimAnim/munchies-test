import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
