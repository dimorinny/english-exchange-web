import {createAction} from 'redux-actions';
import {LOAD_HOME} from '../constants';
import {getHome} from '../services/api/home';
import {LOAD_PEOPLES} from '../constants';
import {getPeoples} from '../services/api/people';

export const loadHome = createAction(LOAD_HOME, getHome);

export const loadPeoples = createAction(LOAD_PEOPLES, getPeoples);
