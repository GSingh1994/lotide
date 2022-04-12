const assert = require('chai').assert;
const flatten = require('../index').flatten;

describe('#Flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('should return [1, 2, 3, 4, 5, 6] for [[1], [2], [3, 4], [5], [6]]', () => {
    assert.deepEqual(flatten([[1], [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
