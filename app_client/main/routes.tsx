import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';import App from './App';import { About, Mailer } from './containers';

export default () => {
  return (
    <Router history={browserHistory} >      <Route path="/" component={App}>        <IndexRoute component={About} />        <Route path="mailer" component={Mailer} />        <Route path="about" component={About} />      </Route>    </Router >
  );
};
