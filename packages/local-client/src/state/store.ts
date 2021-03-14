import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { persistMiddlware } from './middlewares/persist-middleware';

export const store = createStore(reducers, {}, applyMiddleware(persistMiddlware, thunk));
