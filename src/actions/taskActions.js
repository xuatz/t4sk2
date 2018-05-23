import uuid from "uuid/v4";

export const taskAdd = title => {
    return dispatch => {
        dispatch({ type: "TASK_ADD", task: { id: uuid(), title } });
        return Promise.resolve({ status: 200 });
    };
};

export const taskDelete = id => {
    return dispatch => {
        dispatch({ type: "TASK_DELETE", id });
        return Promise.resolve({ status: 200 });
    };
};
