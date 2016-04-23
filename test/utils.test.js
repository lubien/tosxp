import test from 'ava';

import { prettyNumber, percRegex } from '../src/utils/index';

test('prettyNumber adds commas to numbers', t => {
  t.is(prettyNumber(1000), '1,000');
  t.is(prettyNumber(50), '50');
  t.is(prettyNumber(100000), '100,000');
  t.is(prettyNumber(20000000), '20,000,000');
});

test('percRegex matches 1-2 numbers followed by a %', t => {
  t.truthy(percRegex.test('1%'));
  t.truthy(percRegex.test('25%'));
  t.truthy(percRegex.test('99%'));
  t.falsy(percRegex.test('102%'));
  t.falsy(percRegex.test('a%'));
  t.falsy(percRegex.test('22'));
});
