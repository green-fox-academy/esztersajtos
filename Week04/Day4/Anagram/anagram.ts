'use strict'

let list1 = ['taste'];
let list2 = ['state'];

function anagram(list1, list2){
    return list1.split('').sort().join('') === list2.split('').sort().join('');
  }