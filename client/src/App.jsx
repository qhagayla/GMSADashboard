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

  return (
    <div className="app-container">
      <Sidebar
        activeMenuItem={activeMenuItem}
        handleMenuItemClick={handleMenuItemClick}
      />
      <div className="content">
        {activeMenuItem === "" && ( // Render greeting only if no active menu item is selected
        <div className="content-top">
          <div className="greeting">
            <DateDisplay />
            <h1>Hello, PT Sumalde!</h1>
            <h2>Have a nice day!</h2>
          </div>
          <img src="src\components\dashboard-top.png" alt="Image" />
        </div>
        )}

        {activeMenuItem === "dashboard" && <Dashboard />}
        {activeMenuItem === "recordedVideos" && <RecordedVideos />}
      </div>
    </div>
  );
}

export default App;