import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import people from './people';
import home from './home';

const rootReducer = combineReducers({
    people,
    home,
    routing
});

export default rootReducer;
