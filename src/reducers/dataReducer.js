import * as types from 'constants/dataTypes';

const initialState = {
  data: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.REFRESH: {
      return {
        ...state,
        data: refreshData(action.payload.query.results.rate),
      };
    }
    default: {
      return state;
    }
  }
}
