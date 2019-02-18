import uuid from "uuid/v4";

import Tasks from "../models/tasks";

export const taskAdd = task => {
  return async (dispatch, getState) => {
    const now = new Date();
    const newTask = {
      _id: uuid(),
      userId: undefined, // TODO
      createdAt: now.getTime() / 1000,
      createdBy: undefined, // TODO
      modifiedAt: now.getTime() / 1000,
      modifiedBy: undefined, // TODO
      dueDate: undefined, // TODO
      category: undefined, // TODO
      tags: undefined, // TODO
      ...task,
      sync: {
        status: "dirty"
      }
    };
    dispatch({ type: "TASK_ADD", task: newTask });

    try {
      const res = await Tasks.put(newTask);
      if (res.ok) {
        dispatch({
          type: "TASK_UPDATE",
          task: {
            _id: newTask._id,
            sync: {
              status: "synced"
            }
          }
        });
      }
      let state = getState();
      return Promise.resolve({ status: 200 });
    } catch (e) {
      console.error(e);
      dispatch({
        type: "TASK_UPDATE",
        task: {
          _id: newTask._id,
          sync: {
            status: "failed"
          }
        }
      });
      return Promise.resolve({ status: 500 });
    }
  };
};

export const taskDelete = id => {
  return dispatch => {
    dispatch({ type: "TASK_DELETE", id });
    return Promise.resolve({ status: 200 });
  };
};
