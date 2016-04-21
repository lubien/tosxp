import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cardsActionCreators from '../actions/cards';
import * as characterActionCreators from '../actions/character';

import Sidebar from '../components/Sidebar';
import ResultsArea from '../components/ResultsArea';

const containerStyle = {
  paddingTop: 32,
};

const Content = ({ cards, character, characterActions, cardsActions }) => (
  <div className="row">
    <Sidebar
      character={character}
      characterActions={characterActions}
      cards={cards}
      cardsActions={cardsActions}
    />
    <div className="col-xs-4 col-xs-offset-3" style={containerStyle}>
      <ResultsArea character={character} />
    </div>
  </div>
);

Content.propTypes = {
  cards: ImmutablePropTypes.list.isRequired,
  character: ImmutablePropTypes.map.isRequired,
  characterActions: PropTypes.object.isRequired,
  cardsActions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    cards: state.get('cards'),
    character: state.get('character'),
  }),
  dispatch => ({
    characterActions: bindActionCreators(characterActionCreators, dispatch),
    cardsActions: bindActionCreators(cardsActionCreators, dispatch),
  })
)(Content);
