import {createAction} from 'redux-actions';
import {LOAD_HOME, LOAD_PEOPLES, ADD_USER, CHANGE_USER, CHANGE_FORM, FORM_LOADED} from '../constants';
import {getHome} from '../services/api/home';
import {getPeoples} from '../services/api/people';
import {addUser} from '../services/api/user';

export const loadHome = createAction(LOAD_HOME, getHome);

export const loadPeoples = createAction(LOAD_PEOPLES, getPeoples);

export const createUser = createAction(ADD_USER, addUser);

export const changeUser = createAction(CHANGE_USER, (user) => user);

export const changeForm = createAction(CHANGE_FORM, (form) => form);

export const formLoaded = createAction(FORM_LOADED);
