import React, { useState } from 'react';
import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import TaskList from '../TaskList';

import * as actions from '../../actions/taskActions';

const TaskInput = props => {
  const [title, setTitle] = useState('');

  return (
    <div
      css={css`
        margin: 20px 30px;
      `}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (title && title != '') {
            // props.taskAdd(title);
            setTitle('');
          }
        }}>
        <input
          style={{
            width: '100%',
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

const TaskDetail = props => <div css={props.style}>TaskDetail</div>;

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;

    @media (min-width: 480px) {
      flex-direction: row;
      align-items: flex-start;
      justify-items: left;
    }
  `,
  leftContainer: css`
    background-color: teal;
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
  taskInput: css``,
  taskList: css`
    height: 80vh;
    overflow: auto;
  `,
};

const Main2 = props => {
  return (
    <div css={styles.mainContainer}>
      <div css={styles.leftContainer}>
        <div css={styles.taskInput}>
          <TaskInput />
        </div>
        <div css={styles.taskList}>
          <TaskList tasks={props.tasks} />
        </div>
      </div>
      {false && <TaskDetail style={styles.rightContainer} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main2);
