import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class TaskItem extends Component {
    render() {
        return (
            <ListItem>
                <ListItemText
                    primary={this.props.task.title}
                    secondary="Placeholder secondary text"
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon
                            onClick={() => {
                                this.props.onClickDelete(this.props.task);
                            }}
                        />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default TaskItem;
