const expect = require('expect');

const ressultTrue = require('./../../app/dummy');

describe('resultTrue', () => {
    it('should return true', () => {
        expect(ressultTrue()).toBe(true);
    })
})