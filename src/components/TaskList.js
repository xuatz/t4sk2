import React from 'react';
import List from '@material-ui/core/List';
import TaskItem from './TaskItem';

const TaskList = props => (
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
            // onClickItem={this.handleOnClickItem}
            onClickDelete={props.onClickDelete}
          />
        );
      })}
    </List>
  </div>
);

export default TaskList;
