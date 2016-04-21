import { TOGGLE_SIDEBAR } from '../constants/sidebar';

export const INITIAL_STATE = true;

export default function sidebarReducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return !state;
    }
    default: {
      return state;
    }
  }
}
