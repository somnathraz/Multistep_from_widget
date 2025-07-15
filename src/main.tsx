import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FormWidget } from "./components/FormWidget";

const mountNode =
  document.getElementById("form-widget-root") ||
  document.getElementById("root");

if (mountNode) {
  createRoot(mountNode).render(
    <StrictMode>
      <FormWidget />
    </StrictMode>
  );
}
