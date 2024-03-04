import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isAllNumbers positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true as array of only numbers', () => {
    const validationResults = validator.isAllNumbers([1, 2, 3, 4]);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error with an array of non-numbers', () => {
    expect(() => {
      validator.isAllNumbers('1234');
    }).to.throw('[1234] is not an array');
  });

  it('should return true with an integer', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false with a non-integer number', () => {
    const validationResults = validator.isInteger(4.5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error with a non-number', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});
