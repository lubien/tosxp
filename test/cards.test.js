import test from 'ava';

import cardsReducer, { INITIAL_STATE } from '../src/reducers/cards';
import { addCard, removeCard } from '../src/actions/cards';

test('Initialize cardsReducer', t => {
  t.deepEqual(
    cardsReducer(undefined, {}),
    INITIAL_STATE
  );
});

/* ----------  addCard()  ---------- */

test('Cards can be added within 0-11 indexes', t => {
  for (let i = 0; i < 12; i++) {
    t.deepEqual(
      cardsReducer(undefined, addCard(i)),
      INITIAL_STATE.update(i, n => n + 1)
    );
  }
});

test("Can't add a card to a index other than 0-11.", t => {
  t.deepEqual(
    cardsReducer(undefined, addCard(15)),
    INITIAL_STATE
  );
});

/* ----------  removeCard()  ---------- */

test('Cards can be removed within 0-11 indexes', t => {
  const dummyInitialState = INITIAL_STATE.map(n => n + 1);

  for (let i = 0; i < 12; i++) {
    t.deepEqual(
      cardsReducer(dummyInitialState, removeCard(i)),
      dummyInitialState.update(i, n => n - 1)
    );
  }
});

test("Can't remove a card from a index other than 0-11.", t => {
  t.deepEqual(
    cardsReducer(undefined, removeCard(15)),
    INITIAL_STATE
  );
});

test("Can't remove cards you don't have", t => {
  t.deepEqual(
    cardsReducer(undefined, removeCard(0)),
    INITIAL_STATE
  );
});
