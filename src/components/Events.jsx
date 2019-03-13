import React, {Component} from 'react';
import '../index.css';
import functions from '../functions.js';
import timelineItems from '../timelineItems.js';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
      name: functions.filterNames(timelineItems),
    }
    this.setEventName = this.setEventName.bind(this);
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

  handleEnterKey(e) {
    if (e.key === "Enter") {
      this.setEventName(e);
    }
  }

  setEventName(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let id = e.target.id - 1;
      let newName = JSON.parse(JSON.stringify(this.state.name));
      let newEvent = e.target.textContent;
      newName[id] = newEvent;
      this.setState({
        name: newName
      });
    }
  }

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
              id={event.id}
              onKeyPress={this.setEventName}
              contentEditable="true"
              >
              {this.state.name[event.id - 1]}
            </span>
          </div>
        ))}
      </div>
    )
  };
};

export default Events;