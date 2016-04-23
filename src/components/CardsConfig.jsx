import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import CardsCounter from '../elements/CardsCounter';

import miniSubheader from '../styles/miniSubheader';

const CardsConfig = ({ cards, actions }) => (
  <List className="cardsList">
    <Subheader>EXP Cards</Subheader>
    <Subheader style={miniSubheader}>
      You can <b>click and hold</b> the add or remove buttons or
      <b> directly write</b> the number of cards at left.
    </Subheader>
    {cards.map((count, cardLevel) => (
      <CardsCounter
        key={`card-counter-${cardLevel}`}
        level={cardLevel}
        quantity={count}
        removeHandler={() => actions.removeCard(cardLevel)}
        addHandler={() => actions.addCard(cardLevel)}
        setHandler={(amount) => actions.setAmount(cardLevel, amount)}
      />
    ))}
  </List>
);

CardsConfig.propTypes = {
  cards: ImmutablePropTypes.list.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CardsConfig;
