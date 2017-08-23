import * as types from 'constants/dataTypes';
import axios from 'axios';

export function addUser(data) {
  return {
    type: types.ADD_USER,
    payload: data,
  };
}
