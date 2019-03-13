import React, {Component} from 'react';
import '../index.css';
import Events from './Events.jsx';
import Header from './Header.jsx';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowStyle: {
        height: '400px',
        width: '1225px',
        right: '0px',
        transform: 'scale(1)'
      }
    }
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  zoomIn() {
    console.log('in')
  }

  zoomOut() {
    console.log('out')
  }

  scrollLeft() {
    console.log('left')
  }

  scrollRight() {
    console.log('right')
  }

  handleKeyPress(e) {
    if (e.which === 38) {
      this.zoomIn();
    }
    if (e.which === 40) {
      this.zoomOut();
    }
    if (e.which === 39) {
      this.scrollRight();
    }
    if (e.which === 37) {
      this.scrollLeft();
    }
  }
  
  render() {
    return (
      <div className='timeline'
        tabIndex='0'
        onKeyDown={this.handleKeyPress}
        style={
          this.state.windowStyle
        }>
        <Header />
        <Events />
      </div>
    )
  }
};

export default Timeline;