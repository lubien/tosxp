import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

import { percRegex } from '../utils/index';

class NumericField extends Component {
  constructor(props) {
    super(props);

    this.checkChange = this.checkChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      error: false,
    });
  }

  checkChange(e) {
    const value = e.target.value;
    let error = false;

    if (this.props.acceptPercentual && /%/.test(value)) {
      if (!percRegex.test(value)) {
        error = 'Pattern is N%. N has 1-2 digits.';
      } else {
        this.props.handleChange(value);
      }
    } else {
      if (isNaN(value)) {
        error = 'You didn\'t type a number.';
      } else if (value < 0) {
        error = 'Cannot be negative.';
      } else if (this.props.max && value > this.props.max) {
        error = `Maximum is ${this.props.max}.`;
      } else {
        this.props.handleChange(Number(value));
      }
    }

    this.setState({
      error,
    });
  }

  render() {
    return (
      <div style={{ marginLeft: 12 }}>
        <TextField
          style={{ width: '99%' }}
          inputStyle={{ textAlign: 'right', paddingRight: 12 }}
          value={this.props.value}
          onChange={this.checkChange}
          errorText={this.state.error}
          floatingLabelText={<span>{this.props.label}</span>}
        />
      </div>
    );
  }
}

NumericField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  max: PropTypes.number,
  acceptPercentual: PropTypes.bool,
};

NumericField.defaultProps = {
  acceptPercentual: false,
};

export default NumericField;
