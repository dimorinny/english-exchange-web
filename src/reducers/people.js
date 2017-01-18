import typeToReducer from 'type-to-reducer';
import {LOAD_PEOPLES} from '../constants';

const PEOPLES_DEFAULT_STATE = {
    peoples: [],
    isPending: true,
    error: null
};

export default typeToReducer({
    [LOAD_PEOPLES]: {
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
            peoples: action.payload.peoples,
            isPending: false,
            error: null
        })
    }
}, PEOPLES_DEFAULT_STATE);
