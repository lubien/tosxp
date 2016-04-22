import { TOGGLE_SIDEBAR } from '../constants/sidebar';

export const DOCKED_MIN_WIDTH = 980;
export const INITIAL_STATE = typeof window !== 'undefined' &&
 window.innerWidth >= DOCKED_MIN_WIDTH;

export default function sidebarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return !state;
    }
    default: {
      return state;
    }
  }
}
