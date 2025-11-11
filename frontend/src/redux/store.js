 import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import companiesReducer from '../components/companies/companiesReducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
