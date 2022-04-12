const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;

const testString = letterPositions('lighthouse in the house');

describe('#letterPositions', () => {
  it('should return 3 for testString["h"][0]', () => {
    assert.strictEqual(testString['h'][0], 3);
  });
  it('should return 11 for testString["i"][1]', () => {
    assert.strictEqual(testString['i'][1], 10);
  });
});
