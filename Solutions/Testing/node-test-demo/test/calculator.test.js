// test/calculator.test.js
const { expect } = require('chai');
const { add } = require('../src/calculator');

describe('Calculator', () => {
  it('should return sum of two numbers', () => {
    const result = add(10, 20);
    expect(result).to.equal(30);
  });

  it('should handle negative numbers', () => {
    const result = add(-5, -10);
    expect(result).to.equal(-15);
  });
});
