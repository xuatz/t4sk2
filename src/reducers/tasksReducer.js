const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      if (action.payload && action.payload.tasks) {
        return action.payload.tasks.filter(item => !item.isSoftDeleted);
      }
      return state;
    }
    case 'TASK_ADD':
      return [action.task, ...state];
    case 'TASK_DELETE':
      return state.map(item => {
        if (item._id === action._id) {
          item.isSoftDeleted = true;
          return item;
        }
        return item;
      });
    case 'TASK_RESTORE':
      return state.map(item => {
        if (item._id === action._id) {
          item.isSoftDeleted = false;
          return item;
        }
        return item;
      });
    default:
      return state;
  }
};
