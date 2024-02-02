import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import RecordedVideos from "./RecordedVideos";

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
      {activeMenuItem === "dashboard" && <Dashboard />}
      {activeMenuItem === "recordedVideos" && <RecordedVideos />}
    </div>
  );
}

export default App;