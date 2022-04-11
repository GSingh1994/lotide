const chai = require('chai');
const assert = chai.assert;
const head = require('../head');

describe('#head', () => {
  it('should returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("should returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it('should returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
});
