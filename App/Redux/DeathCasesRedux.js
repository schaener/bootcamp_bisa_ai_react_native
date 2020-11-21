import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  deathCasesRequest: [],
  deathCasesRequestAppend: ['data'],
  deathCasesSuccess: ['data'],
  deathCasesFailure: null,
  deathCasesReset: null,
});

export const DeathCasesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: null,
  error: false,
});

/* ------------- Selectors ------------- */

export const deathCasesSelectors = {
  getData: (state) => state.data,
};

/* ------------- Reducers ------------- */

// request the data from an api

export const request = (state) =>
  state.merge({fetching: true, data: state.data});

export const append = (state, {data}) => {
  data = [data, ...state.data];

  return state.merge({fetching: false, data});
};
// successful api lookup
export const success = (state, action) => {
  const {data} = action;
  return state.merge({fetching: false, error: false, data});
};

// Something went wrong somewhere.
export const failure = (state) =>
  state.merge({fetching: false, error: true, data: null});

// Reset
export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEATH_CASES_REQUEST]: request,
  [Types.DEATH_CASES_REQUEST_APPEND]: append,
  [Types.DEATH_CASES_SUCCESS]: success,
  [Types.DEATH_CASES_FAILURE]: failure,
  [Types.DEATH_CASES_RESET]: reset,
});
