import * as types from 'constants/dataTypes';
import * as helpers from '../helpers/helpers';

const initialState = {
  users: [],
  user: {},
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      return {
        ...state,
        users: helpers.addUser(state.users, action.payload),
      };
    }
    case types.DELETE_USER: {
      return {
        ...state,
        users: helpers.deleteUser(state.users, action.payload),
      };
    }

    default: {
      return state;
    }
  }
}
