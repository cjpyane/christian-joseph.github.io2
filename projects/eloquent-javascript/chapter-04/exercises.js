////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
var arr = [];
if(typeof step === 'undefined'){
step = 1;
}else if(typeof step === 'undefined' && start > end){
  step = -1;
}
console.log(step)
if(end > start && step > 0){
  for(let i = start; i <= end; i += step){
    arr.push(i)
  }
}else if(start > end && step < 0){
  for(let i = start; i >= end; i += step){
    console.log(i)
    arr.push(i)
  }
}
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
let total = 0;
for(let i = 0; i < arr.length; i++){
  total += arr[i];
}
return total
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
let reversedArray = [];
for(let i = 0; i < arr.length; i++){
  reversedArray[i] = arr[arr.length - 1 - i];
}
return reversedArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
var arrRev = [];
for(let i = 0; i < arr.length; i++){
  arrRev[i] = arr[i];
}
for(let i = 0; i < arr.length; i++){
  arr[i] = arrRev[arr.length - 1 - i]
}
return arr
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
let rest = null;
for(let i = array.length - 1; i >= 0; i--){
  rest = { value: array[i], rest: rest };
}
return rest
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
if(list.rest === null){
  array.push(list.value)
    return array
  }
  array.push(list.value)
  return listToArray(list.rest, array)
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
if(!list){
  return undefined
}
if(n === 0){
  return list.value
}
return nth(list.rest, n -1);
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
if(typeof x !== 'object' && typeof y !== 'object'){
  return x === y
}
if(typeof x !== 'object' || typeof y !== 'object'){
  return false;
}
let xKey = Object.keys(x), yKey = Object.keys(y);
if(xKey.length !== yKey.length){
  return false
}
for(let i = 0; i < xKey.length; i++){
  if(!yKey.includes(xKey[i]) || !deepEqual(x[xKey[i]], y[yKey[i]])){
    return false
  }
}
return true
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
