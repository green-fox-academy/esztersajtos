import { test } from 'tape';
import { Apple } from './apple';


test('aplle is correct', t => {
	let operation = new Apple();
	let actual = operation.getApple();
	let expected = 'apple';

	t.equal(actual, expected);
	t.end();
});
