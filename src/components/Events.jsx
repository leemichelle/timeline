import React, {Component} from 'react';
import '../index.css';
import functions from '../functions.js';
import timelineItems from '../timelineItems.js';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  calculateTopPosition(obj) {
    return functions.calculateTopPosition(obj);
  };

  calculateWidth(obj) {
    return functions.distanceWidth * functions.calculateEventWidth(obj);
  };

  calculateStart(obj) {
    return functions.distanceWidth * functions.calculateLeftPosition(obj);
  };

  changeBackground(obj) {
    return functions.giveEventColor(obj.id);
  };

  render() {
    return (
      <div>
        {timelineItems.map(event => (
          <div 
            key={event.id} 
            className='eventBox'
            draggable 
            style= {{
              top: this.calculateTopPosition(event),
              width: this.calculateWidth(event),
              left: this.calculateStart(event),
              background: this.changeBackground(event),
              }}>
            <span 
              id={event.id}>
              {event.name}
            </span>
          </div>
        ))}
      </div>
    )
  };
};

export default Events;