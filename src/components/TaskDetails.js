import React, { Component } from "react";

class TaskDetails extends Component {
    state = {
        titleOnClick: false
    };

    render() {
        let { title, description } = this.props.task;

        return (
            <div style={{ textAlign: "left", padding: "10px 20px" }}>
                <div
                    onClick={() => {
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
                <div
                    onClick={() => {
                        this.setState({
                            descriptionOnClick: true,
                            titleOnClick: false,
                            content: this.props.task.description
                        });
                    }}>
                    {this.state.descriptionOnClick ? (
                        <form
                            onSubmit={event => {
                                event.preventDefault();
                                console.log("hey its me, onSubmit");
                            }}>
                            <textarea
                                autoFocus
                                onBlur={event => {
                                    console.log("hey its me, onblur");
                                    this.setState({
                                        descriptionOnClick: false,
                                        titleOnClick: false,
                                        content: "",
                                        form: {}
                                    });
                                }}
                                name="description"
                                value={this.state.content}
                                onChange={event => {
                                    this.setState({
                                        content: event.target.value,
                                        form: {
                                            [event.target.name]:
                                                event.target.value
                                        }
                                    });
                                }}
                            />
                        </form>
                    ) : (
                        <p>{description ? description : "No Description!"}</p>
                    )}
                </div>
            </div>
        );
    }
}

export default TaskDetails;
