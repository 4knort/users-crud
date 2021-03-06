import * as types from 'constants/dataTypes';
import axios from 'axios';

export function addUser(data) {
  return {
    type: types.ADD_USER,
    payload: data,
  };
}

export function deleteUser(id) {
  return {
    type: types.DELETE_USER,
    payload: id,
  };
}

export function updateUser(data, id) {
  return {
    type: types.UPDATE_USER,
    payload: {data, id},
  };
}

