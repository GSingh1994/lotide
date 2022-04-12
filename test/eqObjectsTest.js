const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

describe('#eqObjects', () => {
  it('should return true if both objects are same', () => {
    const ab = { a: '1', b: '2' };
    const ba = { b: '2', a: '1' };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('should return false if one object is diffrent from the other', () => {
    const ab = { a: '1', b: '2' };
    const abc = { a: '1', b: '2', c: '3' };
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it('should return true if both objects are same but their value is an array', () => {
    const cd = { c: '1', d: ['2', 3] };
    const dc = { d: ['2', 3], c: '1' };
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it('should return false if one object value is an array and is diffrent from the other', () => {
    const cd = { c: '1', d: ['2', 3] };
    const cd2 = { c: '1', d: ['2', 3, 4] };
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});
