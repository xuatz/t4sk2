const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case "TASK_ADD":
            return [action.task, ...state];
        case "TASK_DELETE":
            let index = state.findIndex(item => item.id === action.id);
            if (index !== -1) {
                return [...state.slice(0, index), ...state.slice(index + 1)];
            } else {
                return state;
            }
        default:
            return state;
    }
};
