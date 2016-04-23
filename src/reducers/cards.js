import { List } from 'immutable';

export const INITIAL_STATE = List.of(...Array(12).fill(0));

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CARD': {
      const { level } = action;

      if (level >= 0 && level <= 11) {
        return state.update(level, n => n + 1);
      }

      return state;
    }
    case 'REMOVE_CARD': {
      const { level } = action;

      if (level >= 0 && level <= 11 && state.get(level) > 0) {
        return state.update(level, n => n - 1);
      }

      return state;
    }
    case 'SET_AMOUNT': {
      const { level, amount } = action;

      if (level >= 0 && level <= 11) {
        return state.set(level, amount);
      }

      return state;
    }
    default: {
      return state;
    }
  }
}
