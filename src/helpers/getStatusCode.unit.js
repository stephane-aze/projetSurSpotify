/* eslint-disable import/no-extraneous-dependencies */

const {
  expect,
} = require('chai');
const getStatusCode = require('./getStatusCode');

describe('helpers > getStatusCode', () => {
  it('should return 500', () => {
    expect(getStatusCode()).to.equal(500);
  });
  it('should return 400', () => {
    expect(getStatusCode()).to.equal(400);
  });
  it('should return 404', () => {
    expect(getStatusCode()).to.equal(404);
  });
});
