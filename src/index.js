import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { Provider } from "react-redux";
import store from "./usage/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
