import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Drawer from 'material-ui/Drawer';

import CharacterConfig from './CharacterConfig';
import CardsConfig from './CardsConfig';

const dockedMinWidth = 980;

const Sidebar = ({ cards, character, characterActions, cardsActions, open, sidebarActions }) => {
  const style = {
    padding: 6,
    marginTop: 65,
  };
  let docked = true;

  if (window.innerWidth < dockedMinWidth) {
    docked = false;
    style.marginTop = 0;
  }

  return (
    <Drawer
      containerStyle={style}
      open={open}
      docked={docked}
      onRequestChange={sidebarActions.toggleSidebar}
    >
      <CharacterConfig character={character} actions={characterActions} />
      <CardsConfig cards={cards} actions={cardsActions} />
    </Drawer>
  );
};

Sidebar.propTypes = {
  cards: ImmutablePropTypes.list.isRequired,
  character: ImmutablePropTypes.map.isRequired,
  characterActions: PropTypes.object.isRequired,
  cardsActions: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  sidebarActions: PropTypes.object.isRequired,
};

export default Sidebar;
