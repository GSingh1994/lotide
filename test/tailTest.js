const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

describe('#Tail', () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), [
      'Lighthouse',
      'Labs',
    ]);
  });
  it('should not change the length of original array', () => {
    assert.lengthOf(['Yo Yo', 'Lighthouse', 'Labs'], 3);
  });
});
