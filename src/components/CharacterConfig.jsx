import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { MAX_BASE_LEVEL, MAX_RANK } from '../reducers/calculator';

import { List } from 'material-ui/List';
import NumericField from '../elements/NumericField';
import Subheader from 'material-ui/Subheader';

const CharacterConfig = ({ character, actions }) => (
  <List>
    <Subheader>Character</Subheader>

    <NumericField
      label="Initial Rank"
      value={character.getIn(['initial', 'rank'])}
      handleChange={(value) => actions.changeInitialValue('rank', value)}
      max={MAX_RANK}
    />

    <NumericField
      label="Initial Base Level"
      value={character.getIn(['initial', 'baseLevel'])}
      handleChange={(value) => actions.changeInitialValue('baseLevel', value)}
      max={MAX_BASE_LEVEL}
    />
    <NumericField
      label="Initial Class Level"
      value={character.getIn(['initial', 'classLevel'])}
      handleChange={(value) => actions.changeInitialValue('classLevel', value)}
      max={15}
    />

    <NumericField
      label="Initial Base EXP (Value or %)"
      value={character.getIn(['initial', 'baseXp'])}
      handleChange={(value) => actions.changeInitialValue('baseXp', value)}
      acceptPercentual
    />
    <NumericField
      label="Initial Class EXP (Value or %)"
      value={character.getIn(['initial', 'classXp'])}
      handleChange={(value) => actions.changeInitialValue('classXp', value)}
      acceptPercentual
    />
  </List>
);

CharacterConfig.propTypes = {
  character: ImmutablePropTypes.map.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CharacterConfig;
