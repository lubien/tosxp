import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { prettyNumber } from '../utils/index';

import Avatar from 'material-ui/Avatar';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';

import Paper from 'material-ui/Paper';
import { grey400, grey600, cyan700 } from 'material-ui/styles/colors';
import SocialPerson from 'material-ui/svg-icons/social/person';

const paperStyle = {
  padding: 15,
};

const avatarStyle = {
  fontSize: 12,
};

const rankAvatarStyle = {
  fontSize: 12,
  marginRight: 12,
};

const xpNumbersStyle = {
  color: grey600,
  fontSize: 14,
  padding: '5px 0 10px',
  textAlign: 'center',
};

const ResultsArea = ({ character }) => (
  <Paper style={paperStyle} zDepth={4}>
    <List>
      <ListItem
        primaryText="Base XP"
        secondaryText={`Total ${prettyNumber(character.get('accumulatedBaseXp'))}`}
        leftIcon={<SocialPerson />}
        rightAvatar={
          <Avatar
            style={avatarStyle}
            backgroundColor={grey400}
            size={36}
          >
            {character.get('baseLevel')}
          </Avatar>
        }
      />

      <div style={xpNumbersStyle}>
        {prettyNumber(character.get('baseXp'))}
        <b> / {prettyNumber(character.get('reqBaseXp') || '-')}</b>
      </div>

      <LinearProgress
        mode="determinate"
        value={character.get('baseXp')}
        max={character.get('reqBaseXp')}
      />

      <br />

      <ListItem
        primaryText="Class XP"
        secondaryText={`Total ${prettyNumber(character.get('accumulatedClassXp'))}`}
        leftAvatar={
          <Avatar
            style={rankAvatarStyle}
            backgroundColor={cyan700}
            size={36}
          >
            R{character.get('rank')}
          </Avatar>
        }
        rightAvatar={
          <Avatar
            style={avatarStyle}
            backgroundColor={grey400}
            size={36}
          >
            {character.get('classLevel')}
          </Avatar>
        }
      />

      <div style={xpNumbersStyle}>
        {prettyNumber(character.get('classXp'))}
        <b> / {prettyNumber(character.get('reqClassXp') || '-')}</b>
      </div>

      <LinearProgress
        mode="determinate"
        value={character.get('classXp')}
        max={character.get('reqClassXp')}
      />
    </List>
  </Paper>
);

ResultsArea.propTypes = {
  character: ImmutablePropTypes.map.isRequired,
};

export default ResultsArea;
