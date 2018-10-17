import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import { App } from 'components/App/App';
import { NotFound } from 'components/NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/some/link" component={Other} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
