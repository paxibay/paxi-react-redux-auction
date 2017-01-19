import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import * as Immutable from 'immutable';


import { Project, Settings, IState } from './model';
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  CHANGE_COUNT
} from './actions';

const initialState: IState = {
  settings: { count: 2},
  projects: [{ key: 1, code: "01", title: "Project01" }, { key: 2, code: "02", title: "Project02" }]
};


export default handleActions<IState>({
  [ADD_PROJECT]: (state: IState, action: Action<Project>): IState => {
    const updateProjects = state.projects.concat(action.payload);
    const preState = Immutable.fromJS(state);
    const updatedState = preState.setIn(['projects'], updateProjects).toJS();
    console.log(updatedState);

    return updatedState;
  },

  [DELETE_PROJECT]: (state: IState, action: Action<Project>): IState => {
    return initialState;
  },

  [CHANGE_COUNT]: (state: IState, action: Action<Settings>): IState => {
    const preState = Immutable.fromJS(state);
    const updatedState = preState.setIn(['settings', 'count'], action.payload.count).toJS();
    console.log(updatedState);

    return updatedState;
  }    

}, initialState);

