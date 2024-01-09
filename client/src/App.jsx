import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faVideo, faGear, faSquarePollHorizontal, faUser } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faCalendar} size="lg" />{' '}
            <span className="icon-text">Dashboard</span>
          </li>
          <li
            className={activeMenuItem === 'recordedVideos' ? 'active' : ''}
            onClick={() => handleMenuItemClick('recordedVideos')}
          >
            <FontAwesomeIcon icon={faVideo} size="lg" />{' '}
            <span className="icon-text">Recorded Videos</span>
          </li>
          <li
            className={activeMenuItem === 'results' ? 'active' : ''}
            onClick={() => handleMenuItemClick('results')}
          >
            <FontAwesomeIcon icon={faSquarePollHorizontal} size="lg" />{' '}
            <span className="icon-text">Results</span>
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
            <FontAwesomeIcon icon={faGear} size="lg" />{' '}
            <span className="icon-text">Settings</span>
          </li>
          <li
            className={activeMenuItem === 'account' ? 'active' : ''}
            onClick={() => handleMenuItemClick('account')}
          >
            <FontAwesomeIcon icon={faUser} size="lg" />{' '}
            <span className="icon-text">Account</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
