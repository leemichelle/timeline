import React from 'react';
import '../index.css';
import functions from '../functions.js';

const Header = props => (
  <div>
    {functions.weeks.map(week => (
      <span 
        key={week}
        className='header' 
        style={{
          left: functions.calculateHeaderPosition(week)
        }}>
        {functions.headerDates[week]}
      </span>
    ))}
  </div>
);

export default Header;