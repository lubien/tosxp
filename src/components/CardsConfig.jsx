import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import CardsCounter from '../elements/CardsCounter';

const CardsConfig = ({ cards, actions }) => (
  <List>
    <Subheader>EXP Cards</Subheader>
    {cards.map((count, cardLevel) => (
      <CardsCounter
        key={`card-counter-${cardLevel}`}
        level={cardLevel}
        quantity={count}
        removeHandler={() => actions.removeCard(cardLevel)}
        addHandler={() => actions.addCard(cardLevel)}
      />
    ))}
  </List>
);

CardsConfig.propTypes = {
  cards: ImmutablePropTypes.list.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CardsConfig;
