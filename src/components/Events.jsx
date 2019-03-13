import React, {Component} from 'react';
import '../index.css';
import functions from '../functions.js';
import timelineItems from '../timelineItems.js';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
    }
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
            onDrag = {(e) => {
              let offX = e.nativeEvent.offsetX;
              let newX = e.pageX;
              console.log(functions.calculateNewLeft(offX, newX));
            }}
            onDragStart = {(e) => {e.dataTransfer.setData("text", e.nativeEvent.offsetX)}}
            onDragOver = {(e) => {e.preventDefault()}}
            onDrop = {(e) => {e.preventDefault()
              this.props.swap(e.dataTransfer.getData("text"), e.nativeEvent.offsetX)}} 
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