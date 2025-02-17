import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";
import ProductContextProvider from "./context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <ToastContainer />
    <App />
  </ProductContextProvider>
);
