import getName from './get-name.js';

describe('getName', () => {
    it('returns the name property of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        expect(getName(spot)).toEqual('spot');
    });

    it('returns the name property of an object', () => {
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        expect(getName(character)).toEqual('Aang');
    });
});
