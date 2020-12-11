import {
  ReactQueryCacheProvider as CacheProvider,
  useQueryCache,
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Root } from "./Root";

const App = () => {
  return (
    <CacheProvider queryCache={useQueryCache()}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </CacheProvider>
  );
};

export default App;
