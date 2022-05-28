import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DraftAdd from "./components/Draft/DraftAdd";
import DraftEdit from "./components/Draft/DraftEdit";
import Drafts from "./routes/drafts";
import Prompts from "./routes/prompts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DraftAdd />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="drafts/:draftId" element={<DraftEdit />} />
          <Route path="prompts" element={<Prompts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
