import * as React from "react";
import { ReactQueryCacheProvider, useQueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Root } from "./Root";

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={useQueryCache()}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
  );
};

export default App;
