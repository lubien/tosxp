import { fromJS } from 'immutable';
import { CHANGE_INITIAL_VALUE } from '../constants/character';

export const INITIAL_STATE = fromJS({
  rank: 1,
  baseLevel: 1,
  classLevel: 1,
  baseXp: 0,
  classXp: 0,
  accumulatedBaseXp: 0,
  accumulatedClassXp: 0,
  initial: {
    rank: 1,
    baseLevel: 1,
    classLevel: 1,
    baseXp: 0,
    classXp: 0,
  },
});

function changeInitialValue(state, { initialType, value }) {
  if (state.hasIn(['initial', initialType])) {
    return state.mergeDeep({
      initial: { [initialType]: value },
    });
  }

  return state;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_INITIAL_VALUE: {
      return changeInitialValue(state, action);
    }
    default: {
      return state;
    }
  }
}
