// AdminDashboard.js
import React from 'react';
import AdmSidebar from './adminsidebar';
import AdmNavbar from './AdminNavbar';

function AdminDashboard() {
  return (
    <div>
      <AdmNavbar />
      <AdmSidebar />
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default AdminDashboard;
