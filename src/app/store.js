import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import antrianReducer from '../features/Antrian/reducer';
import IndicatorReducer from '../features/Indicator/reducer';
import thunk from 'redux-thunk';

const composerEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    antrian: antrianReducer,
    indicator: IndicatorReducer
});

const store = createStore(rootReducers, composerEnchancer(applyMiddleware(thunk)));

export default store;