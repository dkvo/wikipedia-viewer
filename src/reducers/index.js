import {combineReducers} from 'redux';

import articlesReducer from './articles_reducer';

const reducers = combineReducers({
    articles: articlesReducer
});
export default reducers;