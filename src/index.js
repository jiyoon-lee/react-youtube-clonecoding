import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ContentsList from "./components/Contents/contents-list";
import DetailContent from "./components/Contents/detail-content";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ContentsList />} />
      <Route path="/videos" element={<ContentsList />} />
      <Route path="/videos/:keyword" element={<ContentsList />} />
      <Route path="/videos/watch/:videoId" element={<DetailContent />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
