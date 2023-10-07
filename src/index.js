import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "modern-normalize/modern-normalize.css";
import { GlobalStyle } from "./css/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";
import { persistedStore, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/rental-car-test">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </BrowserRouter>
);
