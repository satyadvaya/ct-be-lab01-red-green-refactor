import copyAndPush from './copy-and-push.js';

describe('copyAndPush', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
        expect(numbers).toEqual([1, 2, 3]);
    });
});
