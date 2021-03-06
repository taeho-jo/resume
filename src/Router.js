import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "pages/Portfolio";
import Stack from "pages/Stack";
import ScrollToTop from "ScrollToTop";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/stack" component={Stack} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Routes;
