import React, {Component} from 'react';
import '../index.css';
import Events from './Events.jsx';

class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='timeline'>
        <Events />
      </div>
    )
  }
}

export default Timeline;