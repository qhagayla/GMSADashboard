import { useState } from 'react';
import './App.css';

function Sidebar() {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Locomotor Monitor Web Application</h2>
      </div>
      <div className="menu">
        <p>Menu:</p>
        <ul>
          <li
            className={activeMenuItem === 'dashboard' ? 'active' : ''}
            onClick={() => handleMenuItemClick('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={activeMenuItem === 'recordedVideos' ? 'active' : ''}
            onClick={() => handleMenuItemClick('recordedVideos')}
          >
            Recorded Videos
          </li>
          <li
            className={activeMenuItem === 'results' ? 'active' : ''}
            onClick={() => handleMenuItemClick('results')}
          >
            Results
          </li>
        </ul>
      </div>
      <div className="others">
        <p>Others:</p>
        <ul>
          <li
            className={activeMenuItem === 'settings' ? 'active' : ''}
            onClick={() => handleMenuItemClick('settings')}
          >
            Settings
          </li>
          <li
            className={activeMenuItem === 'account' ? 'active' : ''}
            onClick={() => handleMenuItemClick('account')}
          >
            Account
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
