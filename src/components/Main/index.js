import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import * as actions from "../../actions/taskActions";

import TaskItem from "../TaskItem";
import TaskDetails from "../TaskDetails";

import Header from "./Header";
import Stats from "./Stats";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  //xz: sample for different pattern to bindActionCreators
  // actions: bindActionCreators({
  // 	...inboundActions,
  // 	load: (line) => {
  // 		return (dispatch) => {
  // 			dispatch(actions.load('line', line))
  // 		}
  // 	}
  // }, dispatch)
  actions: bindActionCreators(actions, dispatch)
  // load: line => {
  // 	dispatch(actions.load("line", line));
  // }
});

class Main extends Component {
  state = {
    taskTitle: "",
    isDeleteTaskDialogOpen: false,
    selectedTask: {
      title: "SAMEPLT TASK TITLE"
    }
  };

  componentDidMount() {
    // remote_db
    //     .getSession()
    //     .then(res => {
    //         if (!res.userCtx.name) {
    //             // nobody's logged in
    //             console.log("noboby nobody but you");
    //         } else {
    //             // response.userCtx.name is the current user
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         return remote_db.signUp({
    //             username: "testuser1",
    //             password: "12345678"
    //         });
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {});
    // db.get("tasks").then(doc => {
    //     console.log(doc);
    //     this.setState({ tasks: doc.tasks });
    // });
  }

  taskAdd = title => {
    const task = {
      title
    };

    this.props.actions.taskAdd(task).then(res => {
      if (res.status === 200) {
        this.setState({
          taskTitle: ""
        });
      }
    });
  };

  handleOnClickDelete = task => {
    this.setState(prevState => ({
      isDeleteTaskDialogOpen: true,
      focusedTask: task
    }));
  };

  handleOnClickItem = task => {
    this.setState({
      selectedTask: task
    });
  };

  handleOnClickOkay = () => {
    this.props.actions.taskDelete(this.state.focusedTask.id).then(res => {
      if (res.status === 200) {
        this.setState({
          isDeleteTaskDialogOpen: false,
          focusedTask: null
        });
      }
    });
  };

  handleOnClickCancel = () => {
    this.setState({
      isDeleteTaskDialogOpen: false,
      focusedTask: null
    });
  };

  render() {
    return (
      <div>
        <MainContainer>
          <LeftPanel>
            <div style={{ height: "20vh" }}>
              <form
                style={{ padding: "30px 0px" }}
                onSubmit={e => {
                  e.preventDefault();
                  this.taskAdd(this.state.taskTitle);
                }}>
                <input
                  style={{
                    fontSize: "1.5em",
                    padding: "10px"
                  }}
                  value={this.state.taskTitle}
                  onChange={e => {
                    this.setState({
                      taskTitle: e.target.value
                    });
                  }}
                />
              </form>
            </div>
            <div style={{ height: "80vh", overflow: "auto" }}>
              {this.props.tasks && (
                <List
                  dense={false}
                  style={{
                    margin: "auto",
                    width: "100%",
                    maxWidth: 360
                  }}>
                  {this.props.tasks.map((task, key) => {
                    return (
                      <TaskItem
                        key={key}
                        task={task}
                        onClickItem={this.handleOnClickItem}
                        onClickDelete={this.handleOnClickDelete}
                      />
                    );
                  })}
                </List>
              )}
              <Dialog
                maxWidth="xs"
                aria-labelledby="confirmation-dialog-title"
                open={this.state.isDeleteTaskDialogOpen}
                onClose={this.handleCancel}
                onBackdropClick={this.handleCancel}
                value="demoValue">
                <DialogTitle id="confirmation-dialog-title">
                  Are you sure you want to delete?
                </DialogTitle>
                <DialogContent>
                  <span>hey</span>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleOnClickCancel} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleOnClickOkay} color="primary">
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </LeftPanel>
          <RightPanel>
            <Header logout={this.props.logout} />
            <Stats />
            {this.state.selectedTask && (
              <TaskDetails task={this.state.selectedTask} />
            )}
          </RightPanel>
        </MainContainer>
      </div>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
`;

const LeftPanel = styled.div`
  width: 30%;
  background: lightyellow;
`;

const RightPanel = styled.div`
  width: 70%;
  background: lightblue;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
`;

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
