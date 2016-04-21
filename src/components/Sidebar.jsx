import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Drawer from 'material-ui/Drawer';

import CharacterConfig from './CharacterConfig';
import CardsConfig from './CardsConfig';

const style = {
  position: 'relative !important',
  padding: 6,
};

const Sidebar = ({ cards, character, characterActions, cardsActions }) => (
  <Drawer containerStyle={style}>
    <CharacterConfig character={character} actions={characterActions} />
    <CardsConfig cards={cards} actions={cardsActions} />
  </Drawer>
);

Sidebar.propTypes = {
  cards: ImmutablePropTypes.list.isRequired,
  character: ImmutablePropTypes.map.isRequired,
  characterActions: PropTypes.object.isRequired,
  cardsActions: PropTypes.object.isRequired,
};

export default Sidebar;
