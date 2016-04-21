import { createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import reduceReducers from 'reduce-reducers';
import { Map } from 'immutable';

import devtools from 'remote-redux-devtools';

import character from '../reducers/character';
import cards from '../reducers/cards';
import calculator from '../reducers/calculator';

const store = createStore(
  reduceReducers(
    combineReducers({ character, cards }),
    calculator
  ), new Map({}), compose(
    devtools()
  )
);

export default store;
