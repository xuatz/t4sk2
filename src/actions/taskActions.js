import uuid from "uuid/v4";
import PouchDB from "pouchdb";

export const taskAdd = title => {
    return (dispatch, getState) => {
        dispatch({ type: "TASK_ADD", task: { id: uuid(), title } });

        let state = getState();

        console.log(state);

        return Promise.resolve({ status: 200 });
    };
};

export const taskDelete = id => {
    return dispatch => {
        dispatch({ type: "TASK_DELETE", id });
        return Promise.resolve({ status: 200 });
    };
};
