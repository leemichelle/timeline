import React, {Component} from 'react';
import '../index.css';
import Events from './Events.jsx';
import Header from './Header.jsx';
import functions from '../functions.js';

class Timeline extends Component {
  constructor() {
    super();
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
    let newState = Object.assign({}, this.state.windowStyle);
    let newScale = functions.scaleIn(this.state.windowStyle.transform);
    newState.transform = newScale;
    this.setState({
      windowStyle: newState
    });
  }

  zoomOut() {
    let newState = Object.assign({}, this.state.windowStyle);
    let newScale = functions.scaleOut(this.state.windowStyle.transform);
    newState.transform = newScale;
    this.setState({
      windowStyle: newState
    });
  }

  scrollLeft() {
    let newState = Object.assign({}, this.state.windowStyle);
    let newWidth = functions.moveLeft(this.state.windowStyle.width);
    let newRight = functions.moveLeft(this.state.windowStyle.right);
    if (newWidth >= functions.maxWidthLeft) {
      newWidth = functions.maxWidthLeft;
      newRight = functions.rightPositionForMaxWidthLeft;
    }
    newState.width = newWidth;
    newState.right = newRight;
    this.setState({
      windowStyle: newState
    });
  }

  scrollRight() {
    let newState = Object.assign({}, this.state.windowStyle);
    let newWidth = functions.moveRight(this.state.windowStyle.width);
    let newRight = functions.moveRight(this.state.windowStyle.right);
    if (newRight === '0px') {
      newWidth = functions.maxWidthRight;
    }
    newState.width = newWidth;
    newState.right = newRight;
    this.setState({
      windowStyle: newState
    });
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