import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const TaskInput = props => <div css={props.css}>TaskInput</div>;

const TaskList = props => <div css={props.css}>TaskList</div>;

const TaskDetail = props => <div css={props.css}>TaskDetail</div>;

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: 'column';
    justify-items: center;

    @media (min-width: 480px) {
      flex-direction: 'row';
      justify-items: left;
    }
  `,
  leftContainer: css`
    display: flex;
    flex-direction: column;
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
        <TaskInput css={styles.taskInput} />
        <TaskList css={styles.taskList} />
      </div>
      <TaskDetail />
    </div>
  );
};

export default Main2;
