import React, {Component} from 'react';
import '../index.css';

import timelineItems from '../timelineItems.js';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {timelineItems.map(event => (
          <div key={event.id} className='eventBox'>
            {event.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Events;