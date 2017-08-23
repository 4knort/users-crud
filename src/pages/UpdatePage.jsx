import React from 'react';
import { withRouter, Link } from 'react-router';
import * as dataActions from '../actions/dataActions';
import { connect } from 'react-redux';
import { Form, UsersTable } from 'components';

const UpdatePage = ({ users, updateUser, params, deleteUser }) => {
  const user = users.find(item => item.id === params.id)
  return (
    <div>
      <Link to="/">Back</Link>
      <Form updateUserSubmit={updateUser} id={params.id} user={user} />
      <UsersTable  onClick={deleteUser} users={[user]} />
    </div>
  );
};

export default connect(state =>({
  users: state.dataReducer.users,
}), dataActions)(UpdatePage);
