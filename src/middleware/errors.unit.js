/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const {
  expect,
} = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const errors = require('./error');

chai.use(sinonChai);

describe('helpers > errors', () => {
  it('should return an array', () => {
    expect(errors).to.be.an('array');
  });

  describe('badRequest', () => {
    const badRequest = errors[0];
    it('should be a function', () => {
      expect(badRequest).to.be.a('function');
    });

    it('should call next with original error if error is not from joi', () => {
      const nextSpy = sinon.spy();
      const error = new Error('Test Error');

      badRequest(error, null, null, nextSpy);

      expect(nextSpy).to.have.been.calledWith(error);
    });

    it('should call next with new error if error is from joi', () => {
      const nextSpy = sinon.spy();
      const error = new Error('Validation error');
      error.isJoi = true;

      badRequest(error, null, null, nextSpy);

      expect(nextSpy).to.have.been.calledWithMatch({ message: 'Bad Request' });
    });
  });

  describe('sendError', () => {
    const sendError = errors[1];
    it('should be a function', () => {
      expect(sendError).to.be.a('function');
    });

    it('should call status and json', () => {
      const res = {
        status: sinon.spy(() => res),
        json: sinon.spy(),
      };
      const err = new Error('Test Error');
      sendError(err, null, res, null);
      expect(res.status).to.have.been.calledWith(500);
      expect(res.status).to.have.been.calledWithMatch({ message: 'Test Error' });
    });
  });
});
