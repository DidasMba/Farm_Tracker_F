import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

function WorkerInv() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default WorkerInv;
