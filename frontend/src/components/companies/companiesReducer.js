import { fetchCompanies } from "../api/companiesApi";
const initialState = {
  all: [],
  status: 'idle',
  error: null,
  filters: { name: '', location: '', industry: '' },
  displayCount: 8,
};
const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';
const SET_FILTER = 'SET_FILTER';
const SHOW_MORE = 'SHOW_MORE';
const SHOW_ALL = 'SHOW_ALL';
export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, status: 'loading', error: null };
    case FETCH_SUCCESS:
      return { ...state, status: 'succeeded', all: action.data };
    case FETCH_FAIL:
      return { ...state, status: 'failed', error: action.error };
    case SET_FILTER:
      return { ...state, filters: { ...state.filters, ...action.filter }, displayCount: 8 };
    case SHOW_MORE:
      return { ...state, displayCount: state.displayCount + 8 };
    case SHOW_ALL:
      return { ...state, displayCount: state.all.length };
    default:
      return state;
  }
}
export function getCompanies() {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    fetchCompanies()
      .then(data => dispatch({ type: FETCH_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_FAIL, error: error.message }));
  };
}
export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}
export function showMore() {
  return { type: SHOW_MORE };
}
export function showAll() {
  return { type: SHOW_ALL };
}