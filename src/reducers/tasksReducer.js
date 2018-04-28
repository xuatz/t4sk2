const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case "TASK_ADD":
            return state.concat(action.task);
        default:
            return state;
    }
};
