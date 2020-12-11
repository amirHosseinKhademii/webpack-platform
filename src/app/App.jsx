import { ReactQueryCacheProvider, useQueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Test } from "../containers/test/Test";

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={useQueryCache()}>
      <span className="text-red-400">test</span>
      <Test />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
  );
};

export default App;
