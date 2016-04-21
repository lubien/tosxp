import { CHANGE_INITIAL_VALUE } from '../constants/character';

export function changeInitialValue(initialType, value) {
  return {
    type: CHANGE_INITIAL_VALUE,
    initialType,
    value,
  };
}
