import { createStore, combineReducers } from 'redux';
import { companyReducer } from './reducers';

const rootReducer = combineReducers({
    companies: companyReducer,
});

const store = createStore(rootReducer);

export default store;