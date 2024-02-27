import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

function WorkerTasks() {
  return (
    <div>
      <Navbar />
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Category</th>
              <th scope="col">Priority</th>
              <th scope="col">Status</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{task.assignedTo}</td>
                <td>{task.category}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      <Sidebar />
    </div>
  );
}

export default WorkerTasks;
