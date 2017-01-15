import {createAction} from 'redux-actions';
import {LOAD_PEOPLES} from '../constants';
import {getPeoples} from '../services/api/people';

export const loadPeoples = createAction(LOAD_PEOPLES, getPeoples);
