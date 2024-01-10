import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faVideo,
  faGear,
  faSquarePollHorizontal,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

function Sidebar({ activeMenuItem, handleMenuItemClick }) {
  const iconStyle = { color: 'white' };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>TINYTRACKS</h2>
      </div>
      <div className="menu">
        <ul>
          {/* Menu items without the logo */}
          <li
            className={activeMenuItem === "dashboard" ? "active" : ""}
            onClick={() => handleMenuItemClick("dashboard")}
          >
            <FontAwesomeIcon icon={faCalendar} size="lg" style={iconStyle} />{" "}
            <span className="icon-text">Dashboard</span>
          </li>
          <li
            className={activeMenuItem === "recordedVideos" ? "active" : ""}
            onClick={() => handleMenuItemClick("recordedVideos")}
          >
            <FontAwesomeIcon icon={faVideo} size="lg" style={iconStyle} />{" "}
            <span className="icon-text">Recorded Videos</span>
          </li>
          <li
            className={activeMenuItem === "results" ? "active" : ""}
            onClick={() => handleMenuItemClick("results")}
          >
            <FontAwesomeIcon icon={faSquarePollHorizontal} size="lg" style={iconStyle} />{" "}
            <span className="icon-text">Results</span>
          </li>
        </ul>
      </div>
      <div className="others">
        <ul>
          {/* Other menu items without the logo */}
          <li
            className={activeMenuItem === "settings" ? "active" : ""}
            onClick={() => handleMenuItemClick("settings")}
          >
            <FontAwesomeIcon icon={faGear} size="lg" style={iconStyle} />{" "}
            <span className="icon-text">Settings</span>
          </li>
          <li
            className={activeMenuItem === "account" ? "active" : ""}
            onClick={() => handleMenuItemClick("account")}
          >
            <FontAwesomeIcon icon={faUser} size="lg" style={iconStyle} />{" "}
            <span className="icon-text">Account</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
