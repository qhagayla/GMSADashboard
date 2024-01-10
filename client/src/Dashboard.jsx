import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <div className="widget">
          <h2>Recent Activities</h2>
          <ul>
            <li>User A uploaded a new video.</li>
            <li>Results for yesterday's session are available.</li>
            <li>New settings applied successfully.</li>
          </ul>
        </div>
        <div className="widget">
          <h2>Statistics</h2>
          <p>Total Recorded Videos: 150</p>
          <p>Active Users: 20</p>
          <p>Results Generated: 50</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
