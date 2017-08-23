import React, { PropTypes } from 'react';
import { Route, IndexRoute, Router } from 'react-router';

import { IndexPage, UpdatePage } from 'pages';
import { App } from 'components';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="user/:id" component={UpdatePage} />
    </Route>
  </Router>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
