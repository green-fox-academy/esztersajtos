'use strict'

import { test } from 'tape';
import { Summing } from './sum';

test('sum numbers', t => {
    let list = new Summing([1, 2, 4, 3]);
    console.log(list.sum());

    let actual = list.sum();
    let expected = 10;

    t.equal(actual, expected);
    t.equal(new Summing([]).sum(), 0);
    t.equal(new Summing([1, 2, '12', 3]).sum(), 0);
    t.end();
});