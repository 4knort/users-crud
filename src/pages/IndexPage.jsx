import React from 'react';
import { connect } from 'react-redux';
import { Form, UsersTable } from 'components';

const IndexPage = ({ users }) => (
  <div className="index-page">
    <Form />
    <UsersTable users={users} />
  </div>
);

export default connect(state =>({
  users: state.dataReducer.users,
}), null)(IndexPage);
