import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const TaskInput = props => {
  const [title, setTitle] = useState('');

  return (
    <div css={props.style}>
      <form
        style={{
          padding: '30px 20px',
          backgroundColor: 'red',
          display: 'flex',
        }}
        onSubmit={e => {
          e.preventDefault();
          if (title && title != '') {
            // props.taskAdd(title);
            setTitle('');
          }
        }}>
        <input
          style={{
            flex: 1,
            backgroundColor: 'grey',
            fontSize: '1.5em',
            padding: '10px 0px',
          }}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

const TaskList = props => <div css={props.style}>TaskList</div>;

const TaskDetail = props => <div css={props.style}>TaskDetail</div>;

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;

    @media (min-width: 480px) {
      flex-direction: row;
      align-items: flex-start;
      justify-items: left;
    }
  `,
  leftContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  rightContainer: css`
    background-color: green;
    flex: 1;

    @media (min-width: 480px) {
      flex: 2;
    }
  `,
  taskInput: css`
    flex: 2;
  `,
  taskList: css`
    flex: 1;
  `,
};

const Main2 = props => {
  return (
    <div css={styles.mainContainer}>
      <div css={styles.leftContainer}>
        <TaskInput style={styles.taskInput} />
        <TaskList style={styles.taskList} />
      </div>
      <TaskDetail style={styles.rightContainer} />
    </div>
  );
};

export default Main2;
