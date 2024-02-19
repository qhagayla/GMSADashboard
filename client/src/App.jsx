import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import RecordedVideos from "./RecordedVideos";
import DateDisplay from "./DateDisplay";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleBackToAppClick = () => {
    setActiveMenuItem(""); // Resetting to an empty string to go back to App
  };

  return (
    <div className="app-container">
      <Sidebar
        activeMenuItem={activeMenuItem}
        handleMenuItemClick={handleMenuItemClick}
      />
      <div className="content">
        {/* Your existing content */}
        {/* Wrapper for "Greetings" */}
        {activeMenuItem === "" && (
          <div className="content-top">
            <div className="greeting">
              <DateDisplay />
              <h1>Hello, PT Sumalde!</h1> 
              <h2>Have a nice day!</h2> 
            </div>
            <img src="src\components\dashboard-top.png" alt="Image" />
          </div>
        )}

        {/* Wrapper for "List of appointments" */}
        {activeMenuItem === "" && (
          <div className="appointments-wrapper">
            <h3>List of appointments</h3>

          </div>
        )}

        {/* Wrapper for "Patient Activity" */}
        {activeMenuItem === "" && (
          <div className="patient-activity-wrapper">
            <h3>Patient Activity</h3>

          </div>
        )}

        {/* Dashboard, RecordedVideos, Results, Settings, and Account are rendered conditionally */}
        {activeMenuItem === "dashboard" && <Dashboard onBackClick={handleBackToAppClick} />}
        {activeMenuItem === "recordedVideos" && <RecordedVideos onBackClick={handleBackToAppClick} />}
      </div>

      {/* Right-side wrapper for "Doctor's Profile" */}
      {activeMenuItem === "" && (
      <div className="right-wrapper">
        <div className="doctor-profile">
          <h3>Doctor's Profile</h3>
          <div className="details-doctor-profile">
            <h3>Name: Mr. Sumalde</h3>
            <h3>SAMPLE SAMPLE SAMPLE SAMPLE</h3>

          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;