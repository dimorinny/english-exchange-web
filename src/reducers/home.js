import typeToReducer from 'type-to-reducer';
import {
    LOAD_HOME,
    ADD_USER,
    CHANGE_USER,
    CHANGE_FORM,
    FORM_LOADED
} from '../constants';

const HOME_DEFAULT_STATE = {
    home: {
        user: {},
        form: {}
    },
    isPending: true,
    addUserIsPending: false,
    error: null
};

export default typeToReducer({
    [LOAD_HOME]: {
        PENDING: (state, action) => ({
            ...state,
            isPending: true,
            error: null
        }),
    },
    [ADD_USER]: {
        PENDING: (state, action) => ({
            ...state,
            addUserIsPending: true,
        }),
    },
    [CHANGE_USER]: (state, action) => ({
        ...state,
        home: {
            ...state.home,
            user: action.payload
        },
    }),
    [CHANGE_FORM]: (state, action) => ({
        ...state,
        home: {
            ...state.home,
            form: action.payload
        },
    }),
    [FORM_LOADED]: (state, action) => ({
        ...state,
        addUserIsPending: false,
        isPending: false,
    }),
}, HOME_DEFAULT_STATE);
