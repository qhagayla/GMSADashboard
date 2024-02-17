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
      {/* Wrapper for "Greetings" */}
        {activeMenuItem === "" && (
          <div className="content-top">
            <div className="greeting">
              <DateDisplay />
              <h1 style={{ marginTop: '40px' }}>Hello, PT Sumalde!</h1> 
              <h2>Have a nice day!</h2> 
            </div>
            <img src="src\components\dashboard-top.png" alt="Image" />
          </div>
        )}

        {/* Wrapper for "List of appointments" */}
        {activeMenuItem === "" && (
          <div className="appointments-wrapper">
            <h3>List of appointments</h3>
            {/* Content for "List of appointments" goes here */}
          </div>
        )}

        {/* Wrapper for "Patient Activity" */}
        {activeMenuItem === "" && (
          <div className="patient-activity-wrapper">
            <h3>Patient Activity</h3>
            {/* Content for "Patient Activity" goes here */}
          </div>
        )}

        {/* Dashboard, RecordedVideos, Results, Settings, and Account are rendered conditionally */}
        {activeMenuItem === "dashboard" && <Dashboard onBackClick={handleBackToAppClick} />}
        {activeMenuItem === "recordedVideos" && <RecordedVideos onBackClick={handleBackToAppClick} />}
      </div>
    </div>
  );
}

export default App;