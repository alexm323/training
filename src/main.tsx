import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import { Accordion } from "./design-library/Accordion.tsx";
import { ProgressBar } from "./design-library/ProgressBar.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/progress-bar" element={<ProgressBar progress={80} />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
