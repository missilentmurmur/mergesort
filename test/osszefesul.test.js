const chai = require('chai');
const osszefesul = require('../src/osszefesul');
const expect = chai.expect;

describe('merge', () => {
    it('Empty is merged', () => {
        expect(osszefesul([], [])).deep.equals([]);
    });

    it('egy elem + ures', () => {
        expect(osszefesul([1], [])).deep.equals([1]);
    });

    it('egy elem + egy elem', () => {
        expect(osszefesul([1], [2])).deep.equals([1,2]);
    });

    it('paratlan szamu elem', () => {
        expect(osszefesul([1,3,5,7],[2])).deep.equals([1,2,3,5,7]);
    });

    it('paros szamu elem', () => {
        expect(osszefesul([1,3],[2,4])).deep.equals([1,2,3,4]);
    });

    it('masodikban sokkal több', () => {
        expect(osszefesul([1,3],[2,4,5,6])).deep.equals([1,2,3,4,5,6]);
    });


});