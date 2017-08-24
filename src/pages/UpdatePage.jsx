import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import * as dataActions from '../actions/dataActions';
import { connect } from 'react-redux';
import { Form, UsersTable } from 'components';

const UpdatePage = ({ users, updateUser, params, deleteUser }) => {
  const user = users.find(item => item.id === params.id);

  const handleClick = (id) => {
    deleteUser(id);
    hashHistory.push('/')
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <Form updateUserSubmit={updateUser} id={params.id} user={user} />
      <UsersTable onClick={handleClick} users={[user]} />
    </div>
  );
};

export default connect(state =>({
  users: state.dataReducer.users,
}), dataActions)(UpdatePage);
