import test from 'ava';
import * as s from '.';

test('`minutes(1.5) returns 90000 milliseconds`', t => {
  t.is(s.minutes(1.5), 90000);
});

// the joys of working with `float` in JS
// revisit at some point, see
// https://stackoverflow.com/questions/1036662/weird-javascript-behaviour-floating-point-addition-giving-the-wrong-answer
// for more info
test.failing('`days(12.3) returns 1.0627e+9 milliseconds`', t => {
  t.is(s.days(12.3), 1.0627e9);
});

test('`seconds(0.042) returns 42 milliseconds', t => {
  t.is(s.seconds(0.042), 42);
});
