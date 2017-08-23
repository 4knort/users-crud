import * as types from 'constants/dataTypes';
import axios from 'axios';

function setData(data) {
  return {
    type: types.SET_DATA,
    payload: data,
  };
}

function setMultipleData(data) {
  return {
    type: types.REFRESH,
    payload: data,
  };
}

export function getData(currency1, currency2) {
  const pair = `%22${currency1}${currency2}%22`;
  const query = `
    https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance
    .xchange%20where%20pair%20in%20(${pair})&format=json&diagnostics=true
    &env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
  `;
  return function(dispatch) {
    axios.get(query).then(response => { 
      dispatch(setData(response.data));   
    });
  };
}

export function deleteData(id) {
  return {
    type: types.DELETE_DATA,
    payload: id,
  };
}

export function refreshData(currencyPairs) {
  const query = `
    https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance
    .xchange%20where%20pair%20in%20(${currencyPairs})&format=json&diagnostics=true
    &env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
  `;

  return function(dispatch) {
    axios.get(query).then(response => { 
      dispatch(setMultipleData(response.data));   
    });
  };
}
