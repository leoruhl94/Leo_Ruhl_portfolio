import React from "react";
import HomePage from "../views/HomePage/HomePage";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProjectsPage } from "../views/Pages/ProjectsPage";
import { AboutPage } from "../views/Pages/AboutPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/:id" component={ProjectsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
