import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import { Accordion } from "./design-library/Accordion.tsx";
import { ProgressBar } from "./design-library/ProgressBar.tsx";
import { Page } from "./design-library/Page.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/accordion"
          element={
            <Page title="Accordion I">
              <Accordion />
            </Page>
          }
        />
        <Route
          path="/progress-bar"
          element={
            <Page title="Progress bar I">
              <ProgressBar progress={80} />
            </Page>
          }
        />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
