import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';

class HoldableButton extends Component {
  constructor(props) {
    super(props);

    this.timer = false;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown() {
    let speed = this.props.interval;
    this.timer = setInterval(this.props.onHold, speed);

    setTimeout(() => {
      if (this.timer) {
        speed /= 2;
        clearInterval(this.timer);
        this.timer = setInterval(this.props.onHold, speed);
      }
    }, 1000);
  }

  onMouseUp() {
    clearInterval(this.timer);
    this.timer = false;
  }

  render() {
    return (
      <IconButton
        tooltip={<span>Holdable</span>}
        tooltipPosition={'top-center'}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseUp}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </IconButton>
    );
  }
}

HoldableButton.propTypes = {
  onHold: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  interval: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default HoldableButton;
