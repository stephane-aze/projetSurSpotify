/* eslint-disable import/no-extraneous-dependencies */
const { expected } = require('chai');
const multiply = require('./multiply');

describe('helpers > multiply', () => {
  it('should return a number', () => {
    // expected(multiply(3,3)).to.equals(9);

  });
  it('should return the right number', () => {
    expected(multiply(3, 3)).to.equal(9);
    expected(multiply(2, 3)).to.equal(6);
    expected(multiply(1, 3)).to.equal(3);
    expected(multiply(2, 4)).to.equal(8);
  });
});
