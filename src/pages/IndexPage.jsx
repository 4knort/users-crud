import React from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';
import { Form, UsersTable } from 'components';

const IndexPage = ({ users, deleteUser }) => (
  <div className="index-page">
    <Form />
    <UsersTable onClick={deleteUser} users={users} />
  </div>
);

export default connect(state =>({
  users: state.dataReducer.users,
}), dataActions)(IndexPage);
