import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div className="app">
    <div className="container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
