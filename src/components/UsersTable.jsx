import React from 'react';

const UsersTable = ({ users }) => {
  const usersTable = users.map((user, index) => {
    return (
      <tr key={`user-${index}`}>
        <td>{user.name}</td>
        <td>{user.date}</td>
        <td>{user.city}</td>
        <td>{user.adress}</td>
        <td>{user.phone}</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>City</th>
        <th>Adress</th>
        <th>Phone</th>
      </tr>

      {usersTable}
    </table>
  );
};

export default UsersTable;
