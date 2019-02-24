import React, { Component } from "react";

import Stats from "./Stats";
import TaskDetails from "./TaskDetails";

export default props => {
  const { task } = props;
  return (
    <>
      <Stats />
      {task && <TaskDetails task={task} />}
    </>
  );
};
