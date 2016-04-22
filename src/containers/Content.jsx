import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cardsActionCreators from '../actions/cards';
import * as characterActionCreators from '../actions/character';
import * as sidebarActionCreators from '../actions/sidebar';

import Sidebar from '../components/Sidebar';
import ResultsArea from '../components/ResultsArea';

const containerStyle = {
  paddingTop: 32,
};

const Content = ({
  cards, character, characterActions, cardsActions, sidebarOpen, sidebarActions,
}) => (
  <div className="row">
    <Sidebar
      character={character}
      characterActions={characterActions}
      cards={cards}
      cardsActions={cardsActions}
      open={sidebarOpen}
      sidebarActions={sidebarActions}
    />
    <div
     className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4"
     style={containerStyle}
    >
      <ResultsArea character={character} />
    </div>
  </div>
);

Content.propTypes = {
  cards: ImmutablePropTypes.list.isRequired,
  character: ImmutablePropTypes.map.isRequired,
  characterActions: PropTypes.object.isRequired,
  cardsActions: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  sidebarActions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    cards: state.get('cards'),
    character: state.get('character'),
    sidebarOpen: state.get('sidebar'),
  }),
  dispatch => ({
    characterActions: bindActionCreators(characterActionCreators, dispatch),
    cardsActions: bindActionCreators(cardsActionCreators, dispatch),
    sidebarActions: bindActionCreators(sidebarActionCreators, dispatch),
  })
)(Content);
