import React, { PropTypes } from 'react';
import { Route, IndexRoute, Router } from 'react-router';

import { IndexPage } from 'pages';
import { App } from 'components';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
