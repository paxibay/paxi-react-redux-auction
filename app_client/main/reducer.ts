import { combineReducers } from 'redux';

import mailer from '../modules/mailer';

const rootReducer = combineReducers({
  mailer
});

export default rootReducer;
