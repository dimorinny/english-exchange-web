import typeToReducer from 'type-to-reducer';
import {LOAD_HOME} from '../constants';

const HOME_DEFAULT_STATE = {
    home: {
        user: {},
        form: {}
    },
    isPending: true,
    error: null
};

export default typeToReducer({
    [LOAD_HOME]: {
        PENDING: (state, action) => ({
            ...state,
            isPending: true,
            error: null
        }),
        REJECTED: (state, action) => ({
            ...state,
            isPending: false,
            error: action.payload.error
        }),
        FULFILLED: (state, action) => ({
            ...state,
            home: action.payload.home,
            isPending: false,
            error: null
        })
    }
}, HOME_DEFAULT_STATE);
