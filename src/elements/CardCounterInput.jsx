import React, { Component, PropTypes } from 'react';

import { red400 } from 'material-ui/styles/colors';

const style = {
  border: 0,
  backgroundColor: 'rgba(0,0,0,0)',
  textAlign: 'center',
  width: 36,
  outline: 'none',
};

class CardCounterInput extends Component {
  constructor(props) {
    super(props);

    this.checkChange = this.checkChange.bind(this);
  }

  componentWillMount() {
    this.setState({ error: false });
  }

  checkChange(e) {
    const value = e.target.value;
    let error;

    if (!isNaN(value) && value < 100000) {
      this.props.onChange(Number(value));
      error = false;
    } else {
      error = true;
    }

    this.setState({ error });
  }

  render() {
    const newStyle = Object.assign(style, {
      color: this.state.error ? red400 : '#fff',
      fontSize: this.props.value > 1000 ? 11 : 13,
      padding: this.props.value > 1000 ? '12px 0' : '10px 0',
    });

    return (
      <input
        style={newStyle}
        value={this.props.value}
        onChange={this.checkChange}
      />
    );
  }
}

CardCounterInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardCounterInput;
