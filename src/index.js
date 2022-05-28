import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewDraft from "./components/NewDraft/NewDraft";
import Drafts from "./routes/drafts";
import Prompts from "./routes/prompts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<NewDraft />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="prompts" element={<Prompts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
