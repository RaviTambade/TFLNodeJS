const { expect } = require('chai');
const { add, multiply } = require('../src/calculator');

describe('Calculator Functions', () => {
  it('should add numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should multiply numbers', () => {
    expect(multiply(4, 5)).to.equal(20);
  });
});
