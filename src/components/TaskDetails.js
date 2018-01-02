import React, { Component } from "react";

class TaskDetails extends Component {
    state = {
        titleOnClick: false
    };

    render() {
        console.log("this.state", JSON.stringify(this.state));
        return (
            <div style={{ textAlign: "left", padding: "10px 20px" }}>
                <div
                    onClick={() => {
                        console.log("hey");
                        this.setState({
                            titleOnClick: true,
                            task: this.props.task
                        });
                    }}>
                    {this.state.titleOnClick ? (
                        <form
                            onSubmit={event => {
                                event.preventDefault();
                                console.log("hey its me, onSubmit");
                            }}>
                            <input
                                onBlur={event => {
                                    console.log("hey its me, onblur");
                                }}
                                name="title"
                                value={this.state.task.title}
                                onChange={event => {
                                    this.setState({
                                        task: {
                                            ...this.state.task,
                                            [event.target.name]:
                                                event.target.value
                                        }
                                    });
                                }}
                            />
                        </form>
                    ) : (
                        <h1>{this.props.task.title}</h1>
                    )}
                </div>

                <div style={{}}>{this.props.task.title}</div>
            </div>
        );
    }
}

export default TaskDetails;
