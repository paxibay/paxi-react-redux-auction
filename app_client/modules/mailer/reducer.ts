import { handleActions, Action } from 'redux-actions';
import * as Immutable from 'immutable';


import { Email, Contact, IState } from './model';
import {
  VERIFY_EMAIL,
  POST_EMAIL
} from './actions';

const initialState: IState = {
  email: {
    subject: "This is subject",
    message: "This is message",
    isValid: false,
    hasPosted: false
  },
  contacts: [{ addres: "Hello@me.com" }, { addres: "Andy@me.com" }]
};

export default handleActions<IState>({
  [VERIFY_EMAIL]: (state: IState, action: Action<Email>): IState => {
    const preState = Immutable.fromJS(state);
    const updatedState = preState.setIn(['email', 'isValid'], action.payload).toJS();
    console.log(updatedState);
    return updatedState;
  },


  [POST_EMAIL]: (state: IState, action: Action<Email>): IState => {
    const preState = Immutable.fromJS(state);
    const updatedState = preState.setIn(['email'], action.payload).toJS();
    console.log(updatedState);
    return updatedState;
  }    

}, initialState);

