// factory that runs our APP
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  // this is another react component(built-in)
  <StrictMode>
    <App />
  </StrictMode>
);
