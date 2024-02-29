import React, { useState, useEffect } from 'react';
import WorkerSidebar from './WorkerSidebar'; // Ensure the import path and filename are correct
import WorkerNavbar from './WorkerNavbar'; // Ensure the import path and filename are correct

function WorkerDashboard() {
  // State to store dashboard data
  const [dashboardData, setDashboardData] = useState(null);

  // useEffect to perform GET request when component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/dashboard')
      .then(response => response.json())
      .then(data => {
        // Set the dashboard data to state
        setDashboardData(data);
      })
      .catch(error => {
        // Handle any errors here
        console.error('Error fetching dashboard data:', error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <WorkerNavbar data={dashboardData} />
      <WorkerSidebar data={dashboardData} />
    </div>
  );
}

export default WorkerDashboard;