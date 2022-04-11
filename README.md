# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @gagansingh/lotide`

**Require it:**

`const _ = require('@gagansingh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: returns first item of given array.
- `middle(array)`: returns middle most item/items of an array.
- `tail(array)`: returns array without first item.
- `takeUntil(array,callback)`: Remove items from array until the callback condition is fulfilled.
- `without(array,itemToRemove)`:Remove given item from the given array.
- `map(array,callback)`:Clone of .map() method.
- `letterPosition(string)`:return all the indices in the string where each character is found.
- `flatten(array)`:return a single array from the nested array.
- `findKeyByValue(object,value)`: return object key of given value.
- `findKey(object,callback)`:scan the object and return the first key for which the callback returns a truthy value.
- `countOnly(array,item)`:return number of given item in provided array.
- `countLetters(string)`:return a count of each of the letters in given string.
- `eqObjects(object1,object2)`:compare the equality of given objects.
- `eqArrays(array1,array2)`:compare the equality of given arrays.
- `assertEqual(primitive1,primitive2)`:compare the value of two primitives.
- `assertArraysEqual(array1,array2)`:same functionality as eqArrays and also print nice output to console.
- `assertObjectsEqual(object1,object1)`:same functionality as eqObjects and also print nice output to console.
