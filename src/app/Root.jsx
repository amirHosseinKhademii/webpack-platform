import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Test = lazy(() => import("../containers/test/Test"));

export const Root = () => {
  return (
    <Router>
      <Suspense fallback={() => <div>loading</div>}>
        <Switch>
          <Route exact path="/test" component={Test} />
        </Switch>
      </Suspense>
    </Router>
  );
};
