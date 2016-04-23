import React, { PropTypes } from 'react';

import Avatar from 'material-ui/Avatar';
import { grey400, red200, teal200 } from 'material-ui/styles/colors';

import AddIcon from 'material-ui/svg-icons/content/add-circle';
import RemoveIcon from 'material-ui/svg-icons/content/remove-circle';

import HoldableButton from './HoldableButton';
import CardCounterInput from './CardCounterInput';

const style = {
  paddingLeft: 16,
  height: 54,
};

const avatarStyle = {
  left: 8,
  fontSize: 12,
  marginRight: 10,
};

const buttonsStyle = {
  display: 'inline',
  position: 'relative',
  float: 'right',
  top: -6,
};

const CardsCounter = ({ level, quantity, removeHandler, addHandler, setHandler }) => (
  <div style={style}>
    <Avatar
      backgroundColor={grey400}
      size={36}
      style={avatarStyle}
    >
      <CardCounterInput value={quantity} onChange={setHandler} />
    </Avatar>

    <strong style={{ fontSize: 12 }}>Lv{level + 1} Card</strong>

    <div style={buttonsStyle}>
      <HoldableButton onClick={removeHandler} onHold={removeHandler} interval={100}>
        <RemoveIcon color={red200} />
      </HoldableButton>

      <HoldableButton onClick={addHandler} onHold={addHandler} interval={100}>
        <AddIcon color={teal200} />
      </HoldableButton>
    </div>
  </div>
);

CardsCounter.propTypes = {
  level: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  removeHandler: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired,
  setHandler: PropTypes.func.isRequired,
};

export default CardsCounter;
