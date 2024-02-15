import React, { useState, useEffect } from "react";

function DateDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="dashboard-date">{currentDate.toLocaleString()}</div>;
}

export default DateDisplay;