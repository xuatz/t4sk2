import React, { useState } from 'react';
import List from '@material-ui/core/List';
import TaskItem from './TaskItem';

const TaskList = props => {
  const [activeTaskId, setActiveTaskId] = useState(-1);
  return (
    <div css={props.style}>
      <List
        dense={false}
        style={{
          margin: 'auto',
          width: '100%',
          maxWidth: 360,
        }}>
        {props.tasks.map((task, key) => {
          return (
            <TaskItem
              key={key}
              task={task}
              activeTaskId={activeTaskId}
              setActiveTaskId={setActiveTaskId}
              onClickDelete={props.onClickDelete}
              onClickRestore={props.onClickRestore}
            />
          );
        })}
      </List>
    </div>
  );
};

export default TaskList;
