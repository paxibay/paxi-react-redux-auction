import { createAction, Action } from 'redux-actions';
//import { assign } from 'lodash';

import { Project, Settings } from './model';

export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const CHANGE_COUNT = 'CHANGE_COUNT';

const addProject = createAction<Project, Project>(
  ADD_PROJECT,
  (project: Project) => project
);

const deleteProject = createAction(
  DELETE_PROJECT,
  () => { }
);

const changeCount = createAction<Settings, Settings, number>(
  CHANGE_COUNT,
  (settings: Settings, newCount: number) => Object.assign({}, settings, { count: newCount })
);

export {
  addProject,
  deleteProject,
  changeCount
}
