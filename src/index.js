import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    ReactDOM.render(
      <BrowserRouter>
        <NextApp />
      </BrowserRouter>,
      document.getElementById("root")
    );
  });
}
