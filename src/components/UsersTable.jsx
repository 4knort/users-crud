import React from 'react';
import { Link } from 'react-router';

const UsersTable = ({ users, onClick }) => {
  const usersTable = users.map((user, index) => {
    if (user) {
      return (
        <tr key={`user-${index}`}>
          <td>{user.name}</td>
          <td>{user.date}</td>
          <td>{user.city}</td>
          <td>{user.adress}</td>
          <td>{user.phone}</td>
          <td>
            <button onClick={() => onClick(user.id)}>delete</button>
          </td>
          <td>
            <Link to={`/user/${user.id}`}>Details</Link>
          </td>
        </tr>
      );
    } else {
      return null;
    }
    
  });

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>City</th>
        <th>Adress</th>
        <th>Phone</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>

      {usersTable}
    </table>
  );
};

export default UsersTable;
