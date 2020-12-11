import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Test = React.lazy(() => import("../containers/test/Test"));

export const Root = () => {
  return (
    <Router>
      <React.Suspense fallback={() => <div>loading</div>}>
        <Switch>
          <Route exact path="/test" component={Test} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};
