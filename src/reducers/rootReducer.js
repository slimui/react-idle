import { combineReducers } from 'redux';

import testReducer from './testReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    test: testReducer,
    counter: counterReducer
});

export default rootReducer;