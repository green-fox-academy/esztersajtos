import { test } from 'tape';
import { Apple } from './apple';

test('apple is correct', t => {
  t.equal(new Apple().getApple(), 'apple');
  t.equal(new Apple().getApple(), 'melon');
  t.end();
});