import test from 'ava';

import sidebarReducer, { INITIAL_STATE } from '../src/reducers/sidebar';
import { toggleSidebar } from '../src/actions/sidebar';

test('When you toggle the siebar, you invert the state', t => {
  t.is(
    sidebarReducer(INITIAL_STATE, toggleSidebar()),
    !INITIAL_STATE
  );
});
