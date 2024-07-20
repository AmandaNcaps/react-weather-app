import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <div className="App">
        <h1>Weather App</h1>
        <App />
      </div>
      <footer>
        This project was coded by
        <a
          href="https://github.com/AmandaNcaps"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}Amanda Ncaphayi
        </a>
        & is hosted on{" "}
        <a
          href="https://github.com/AmandaNcaps/react-weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </footer>
    </>
  </StrictMode>
);