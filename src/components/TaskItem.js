import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

const TaskItem = props => {
  const { task, onClickDelete, onClickRestore } = props;

  const handleOnClick = () => {
    if (task.isSoftDeleted) {
      onClickRestore(task._id);
    } else {
      onClickDelete(task._id);
    }
  };

  return (
    <ListItem>
      <ListItemText
        style={
          task.isSoftDeleted
            ? {
                color: 'grey',
                textDecoration: 'line-through',
              }
            : {}
        }
        primary={task.title}
        secondary="Placeholder secondary text"
        secondaryTypographyProps={{
          color: 'grey',
        }}
        onClick={() => {
          // this.props.onClickItem(this.props.task);
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label={task.isSoftDeleted ? 'Restore' : 'Delete'}
          onClick={handleOnClick}>
          {task.isSoftDeleted ? <RestoreFromTrashIcon /> : <DeleteIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
