import React from "react";
import "./index.css";

import { Outlet } from "react-router-dom";
import SearchHeader from "components/SearchHeader";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { YoutubeApiProvider } from "context/YoutubeApiContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
