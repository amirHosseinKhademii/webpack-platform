import { ReactQueryCacheProvider, useQueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Test } from "../containers/test/Test";

const Root = () => {
  return (
    <ReactQueryCacheProvider queryCache={useQueryCache()}>
      amir
      <Test />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
  );
};

export default Root;
