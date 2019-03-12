import React, {Component} from 'react';
import '../index.css';
import Events from './Events.jsx';
import Header from './Header.jsx';

class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='timeline'>
        <Header />
        <Events />
      </div>
    )
  }
};

export default Timeline;