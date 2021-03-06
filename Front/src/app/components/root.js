import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import ReactGA from 'react-ga';
import Home from "./home";

// ReactGA.initialize('');
//
// const logPageView = () => {
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
// };

// Root component uses Provider to provide the app with store.
// Configures url routes with appropriate components.

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="*" component={Home} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object
};

export default Root;
