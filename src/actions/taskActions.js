import uuid from "uuid/v4";

export const addTask = title => {
    return dispatch => {
        dispatch({ type: "TASK_ADD", task: { id: uuid(), title } });
        return Promise.resolve({ status: 200 });
    };
};
