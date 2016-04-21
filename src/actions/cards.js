import { ADD_CARD, REMOVE_CARD } from '../constants/cards';

export function addCard(level) {
  return {
    type: ADD_CARD,
    level,
  };
}

export function removeCard(level) {
  return {
    type: REMOVE_CARD,
    level,
  };
}
