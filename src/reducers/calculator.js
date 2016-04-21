import { Map } from 'immutable';
import { CALCULATE } from '../constants/calculator';
import { CHANGE_INITIAL_VALUE } from '../constants/character';
import { ADD_CARD, REMOVE_CARD } from '../constants/cards';

import baseXpData from '../data/base-xp.json';
import classXpData from '../data/class-xp.json';
import cardsXpData from '../data/xp-cards.json';

export const INITIAL_STATE = new Map({});
// Actually, it's the maximum level and rank we can calculate
// from the data of tosbase.com
export const MAX_BASE_LEVEL = baseXpData.length;
export const MAX_RANK = classXpData.length;

function calculateXp(state) {
  const initial = state.getIn(['character', 'initial']);
  const cards = state.get('cards');

  let rank = initial.get('rank');
  let baseLevel = initial.get('baseLevel');
  let classLevel = initial.get('classLevel');
  let baseXp = initial.get('baseXp');
  let classXp = initial.get('classXp');
  let accumulatedBaseXp = 0;
  let accumulatedClassXp = 0;

  // Accumulate XP from cards
  cards.forEach((quantity, i) => {
    const addBaseXp = cardsXpData[i].base * quantity;
    accumulatedBaseXp += addBaseXp;
    baseXp += addBaseXp;

    const addClassXp = cardsXpData[i].class * quantity;
    accumulatedClassXp += addClassXp;
    classXp += addClassXp;
  });


  let reqBaseXp = baseXpData[baseLevel];
  // Consume baseXp to level up
  while (baseLevel < MAX_BASE_LEVEL && baseXp >= reqBaseXp) {
    baseXp -= reqBaseXp;
    baseLevel++;

    reqBaseXp = baseXpData[baseLevel];
  }

  let reqClassXp = classXpData[rank - 1][classLevel];
  // Consume classXp to level up
  while (
    (rank < MAX_RANK || classLevel < 15 && rank === 15) && classXp >= reqClassXp
  ) {
    classXp -= reqClassXp;
    classLevel++;

    if (classLevel >= 15) {
      classLevel -= 15;
      rank++;
    }

    reqClassXp = classXpData[rank - 1][classLevel];
  }

  return state.mergeDeep({
    character: {
      rank,
      baseLevel,
      classLevel,
      baseXp,
      classXp,
      accumulatedBaseXp,
      accumulatedClassXp,
      reqBaseXp,
      reqClassXp,
    },
  });
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CALCULATE:
    case ADD_CARD:
    case REMOVE_CARD:
    case CHANGE_INITIAL_VALUE: {
      return calculateXp(state);
    }
    default: {
      return state;
    }
  }
}
