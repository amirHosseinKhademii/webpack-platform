import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Test = React.lazy(() => import("../containers/test/Test"));

export const Root = () => {
  const Loading = () => <div>loading</div>;
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/test" component={Test} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};
