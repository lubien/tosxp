import { createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import reduceReducers from 'reduce-reducers';
import { Map } from 'immutable';

import devtools from 'remote-redux-devtools';

import character from '../reducers/character';
import cards from '../reducers/cards';
import sidebar from '../reducers/sidebar';
import calculator from '../reducers/calculator';

const enhancer = (process.env.NODE_ENV !== 'production') ? compose(
  devtools()
) : undefined;

const store = createStore(
  reduceReducers(
    combineReducers({ character, cards, sidebar }),
    calculator
  ), new Map({}), enhancer
);

export default store;
