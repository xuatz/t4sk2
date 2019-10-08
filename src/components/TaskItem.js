import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

const TaskItem = props => {
  const {
    task,
    onClickDelete,
    onClickRestore,

    activeTaskId,
    setActiveTaskId,
  } = props;

  const handleOnClickItem = () => {
    setActiveTaskId(task._id);
  };

  const handleOnClickDelete = () => {
    if (task.isSoftDeleted) {
      onClickRestore(task._id);
    } else {
      onClickDelete(task._id);
    }
  };

  const isActive = activeTaskId === task._id;

  return (
    <ListItem
      style={{
        ...(isActive && {
          backgroundColor: 'green',
        }),
      }}>
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
        secondaryTypographyProps={
          {
            // color: 'grey',
          }
        }
        onClick={handleOnClickItem}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label={task.isSoftDeleted ? 'Restore' : 'Delete'}
          onClick={handleOnClickDelete}>
          {task.isSoftDeleted ? <RestoreFromTrashIcon /> : <DeleteIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
