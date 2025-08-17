// component import
// css file
// react component
import { StrictMode } from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import {Provider} from "react-redux"
import { BrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
);

