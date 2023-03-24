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

import NotFound from "pages/NotFound";
import Videos from "pages/Videos";
import VideoDetail from "pages/VideoDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route index element={<Videos />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/videos/:keyword" element={<Videos />} />
      <Route path="/videos/watch/:videoId" element={<VideoDetail />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
