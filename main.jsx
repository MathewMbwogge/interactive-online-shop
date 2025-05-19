
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";


import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { PriceProvider } from "./PriceContext";
import { ThemeProvider } from "./ThemeContext";
import store from "./reducers/Store"

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <ThemeProvider>
        <PriceProvider>
          <RouterProvider router={router} />
        </PriceProvider>
      </ThemeProvider>
    </Provider>
  );