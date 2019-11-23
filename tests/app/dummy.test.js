const expect = require('expect');

const ressultTrue = require('./../../app/dummy');

describe('resultTrue', () => {
    it('should return true if result exist', () => {
        expect(ressultTrue()).toBe(true);
    })
})