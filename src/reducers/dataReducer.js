import * as types from 'constants/dataTypes';

const initialState = {
  data: [],
};

function addCurrency(arr, obj) {
  const array = arr.slice(0);
  let duplicate = false;

  array.forEach(item => {
    if (item.id === obj.id) {
      duplicate = true;
    }
  });

  if (duplicate) {
    return array;
  }

  array.push(obj);
  return array;
}

function deleteCurrency(arr, id) {
  const array = arr.filter(item => {
    if (item.id !== id) {
      return item;
    }
  });

  return array;
}

function refreshData(data) {
  if (Array.isArray(data)) {
    return data
  }

  const arr = [];
  arr.push(data)
  return arr;
}
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA: {
      return {
        ...state,
        data: addCurrency(state.data, action.payload.query.results.rate),
      };
    }
    case types.DELETE_DATA: {
      return {
        ...state,
        data: deleteCurrency(state.data, action.payload),
      };
    }
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
