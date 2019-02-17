import uuid from "uuid/v4";
import PouchDB from "pouchdb";

export const taskAdd = task => {
  return (dispatch, getState) => {
    const now = new Date();
    const newTask = {
      id: uuid(),
      userId: undefined, // TODO
      createdAt: now.getTime() / 1000,
      createdBy: undefined, // TODO
      modifiedAt: now.getTime() / 1000,
      modifiedBy: undefined, // TODO
      dueDate: undefined, // TODO
      category: undefined, // TODO
      tags: undefined, // TODO
      ...task
    };
    dispatch({ type: "TASK_ADD", task: newTask });
    let state = getState();
    return Promise.resolve({ status: 200 });
  };
};

export const taskDelete = id => {
  return dispatch => {
    dispatch({ type: "TASK_DELETE", id });
    return Promise.resolve({ status: 200 });
  };
};
