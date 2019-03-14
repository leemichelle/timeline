import React from 'react';
import '../index.css';
import functions from '../functions.js';

const Header = () => (
  <div>
    {functions.weeks.map(week => (
      <span 
        key={week}
        className='header' 
        style={{
          left: functions.calculateHeaderPosition(week),
          width: (functions.distanceWidth * 7),
        }}>
        {functions.headerDates[week]}
      </span>
    ))}
  </div>
);

export default Header;