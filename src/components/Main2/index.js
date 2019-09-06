/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { connect } from 'react-redux';

import TaskList from '../TaskList';

import * as actions from '../../actions/taskActions';

const TaskInput = props => {
  const [title, setTitle] = useState('');

  return (
    <div css={css``}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (title && title !== '') {
            props.taskAdd({ title });
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
          onChange={e => {
            console.log('e.target.value', e.target.value);
            setTitle(e.target.value);
          }}
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
    height: 100vh;

    @media (min-width: 480px) {
      flex-direction: row;
      align-items: flex-start;
      justify-items: left;
    }
  `,
  leftContainer: css`
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-self: stretch;

    height: 100vh;

    padding: 20px 30px;

    @media (min-width: 480px) {
      flex-basis: auto; /* default value */
      flex-grow: 1;
      max-width: 320px;
      height: auto;
    }
  `,
  rightContainer: css`
    display: none;
    background-color: green;
    flex: 1;

    @media (min-width: 480px) {
      display: flex;
      flex: 2;
    }
  `,
  taskInput: css``,
  taskList: css`
    overflow: auto;
    height: 80vh;
  `,
};

const Main2 = props => {
  return (
    <div css={styles.mainContainer}>
      <div css={styles.leftContainer}>
        <div css={styles.taskInput}>
          <TaskInput taskAdd={props.taskAdd} />
        </div>
        <div css={styles.taskList}>
          <TaskList
            tasks={props.tasks}
            onClickDelete={props.taskDelete}
            onClickRestore={props.taskRestore}
          />
        </div>
      </div>
      <div css={styles.rightContainer}>
        <TaskDetail />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main2);
