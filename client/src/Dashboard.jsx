import React from "react";
import "./Dashboard.css";

function Dashboard({ onBackClick }) {
  return (
    <div className="dashboard">
      <button onClick={onBackClick}>Back Button</button>
      <h2>Dashboard Summary</h2>
      <div className="dashboard-content">
        <div className="dashboard-wrapper">
          <div className="widget">
            <h2>List of Appointments</h2>
            <ul>
              <li>Appointment with Patient X at 10:00 AM</li>
              <li>Appointment with Patient Y at 11:30 AM</li>
              <li>Appointment with Patient Z at 2:00 PM</li>
            </ul>
          </div>
          <div className="widget">
            <h2>Patient Activity</h2>
            <ul>
              <li>Patient X completed exercise session.</li>
              <li>Patient Y reported improvement in pain level.</li>
              <li>Patient Z uploaded progress photos.</li>
            </ul>
          </div>
          <div className="widget">
            <h2>Patient Summary</h2>
            <ul>
              <li>Patient X: 3 sessions remaining</li>
              <li>Patient Y: 1 session remaining</li>
              <li>Patient Z: Treatment completed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;