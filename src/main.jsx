import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import App from "./App.jsx";
import { SearchValueProvider } from "@context/searchValueContext .jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchValueProvider>
      <App />
    </SearchValueProvider>
  </StrictMode>,
);
