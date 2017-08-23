import * as types from 'constants/dataTypes';
import axios from 'axios';

function setData(data) {
  return {
    type: types.SET_DATA,
    payload: data,
  };
}
