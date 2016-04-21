import test from 'ava';

import { Map } from 'immutable';

import characterReducer, {
  INITIAL_STATE as CHAR_INITIAL_STATE,
} from '../src/reducers/character';

import cardsReducer, {
  INITIAL_STATE as CARDS_INITIAL_STATE,
} from '../src/reducers/cards';

import calculatorReducer, {
  MAX_BASE_LEVEL, MAX_RANK,
} from '../src/reducers/calculator';

import { CALCULATE } from '../src/constants/calculator';

import { addCard } from '../src/actions/cards';

import baseXpData from '../src/data/base-xp.json';
import classXpData from '../src/data/class-xp.json';
import cardsXpData from '../src/data/xp-cards.json';

const INITIAL_STATE = new Map({
  character: CHAR_INITIAL_STATE,
  cards: CARDS_INITIAL_STATE,
});

test('No action return the state itself', t => {
  t.deepEqual(
    calculatorReducer(INITIAL_STATE, {}),
    INITIAL_STATE
  );
});

test('At first, you have no XP points', t => {
  const character = INITIAL_STATE.get('character');
  t.is(character.get('baseXp'), 0);
  t.is(character.get('classXp'), 0);
});

test('Gain XP for each card you have', t => {
  for (let i = 0; i < 12; i++) {
    const cards = cardsReducer(INITIAL_STATE.cards, addCard(i));
    const state = INITIAL_STATE.merge({ cards });
    const character = calculatorReducer(state, { type: CALCULATE }).get('character');

    t.is(
      character.get('accumulatedBaseXp'),
      cardsXpData[i].base
    );
  }
});

test('You gain level when you reach the maximum XP', t => {
  const reqBaseXp = baseXpData[/* level = */1];
  const reqClassXp = classXpData[/* rank = */0][/* level = */1];
  // note we count ranks from 0
  const state = INITIAL_STATE.setIn(
    ['character', 'initial', 'baseXp'],
    reqBaseXp
  ).setIn(
    ['character', 'initial', 'classXp'],
    reqClassXp
  );
  const character = calculatorReducer(state, { type: CALCULATE })
    .get('character');

  t.is(character.get('baseLevel'), 2);
  t.is(character.get('classLevel'), 2);
});

test('Your rank frow when you reach class level 15', t => {
  const reqClassXp = classXpData[0] // sum required xp to reach class level 15
    .reduce((prev, curr) => prev + curr, 0);
  const state = INITIAL_STATE
    .setIn(['character', 'initial', 'classXp'], reqClassXp);
  const rank = calculatorReducer(state, { type: CALCULATE })
    .getIn(['character', 'rank']);

  t.is(rank, 2);
});

test("Can't overflow max base level and max rank", t => {
  const absurdlyHugeAmmountOfBaseXp = baseXpData[MAX_BASE_LEVEL - 1] * 1000000;
  const absurdlyHugeAmmountOfClassXp = classXpData[MAX_RANK - 1][14] * 1000000;
  const state = INITIAL_STATE
    .setIn(['character', 'initial', 'baseLevel'], MAX_BASE_LEVEL)
    .setIn(['character', 'initial', 'classLevel'], 15)
    .setIn(['character', 'initial', 'rank'], MAX_RANK)
    .setIn(['character', 'initial', 'baseXp'], absurdlyHugeAmmountOfBaseXp)
    .setIn(['character', 'initial', 'classXp'], absurdlyHugeAmmountOfClassXp);
  const character = calculatorReducer(state, { type: CALCULATE })
    .get('character');

  t.is(character.get('baseLevel'), MAX_BASE_LEVEL);
  t.is(character.get('classLevel'), 15);
  t.is(character.get('rank'), MAX_RANK);
});
