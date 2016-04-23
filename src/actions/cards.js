import { ADD_CARD, REMOVE_CARD, SET_AMOUNT } from '../constants/cards';

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

export function setAmount(level, amount) {
  return {
    type: SET_AMOUNT,
    level,
    amount,
  };
}
