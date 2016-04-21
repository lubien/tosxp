import test from 'ava';

import characterReducer, { INITIAL_STATE } from '../src/reducers/character';
import { changeInitialValue } from '../src/actions/character';

test('Initialize characterReducer', t => {
  t.deepEqual(
    characterReducer(undefined, {}),
    INITIAL_STATE
  );
});

test('Initial values can be changed', t => {
  t.deepEqual(
    characterReducer(undefined, changeInitialValue('rank', 7)),
    INITIAL_STATE.mergeDeep({
      initial: { rank: 7 },
    })
  );
});

test("You can't change a initial value that doesn't exist", t => {
  t.deepEqual(
    characterReducer(undefined, changeInitialValue('foo', 2)),
    INITIAL_STATE
  );
});
