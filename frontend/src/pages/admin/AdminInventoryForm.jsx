import React from 'react';
import AdmSidebar from './adminsidebar';
import AdmNavbar from './AdminNavbar';
import './admin.css'

function AdminInv() {
  return (
    <div>
      <AdmNavbar />
      <div className="content-container" style={{ marginLeft: '400px', marginTop: '100px', marginRight:'20px',backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <form className="row g-3"style={{ borderRadius: '20px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
          <h1 className="text-success ">Inventory Table</h1>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control smaller-input" id="inputEmail4" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control smaller-input" id="inputPassword4" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control smaller-input" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control smaller-input" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control smaller-input" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select smaller-input">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control smaller-input" id="inputZip" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control smaller-input" id="inputZip" />
          </div>
          <div className="col-md-4">
          <label htmlFor="inputZip" className="form-label">-----</label>
            <button type="submit" className="btn btn-success smaller-input">Sign in</button>
          </div>
        </form>
      </div>
      <AdmSidebar />
    </div>
  );
}

export default AdminInv;
