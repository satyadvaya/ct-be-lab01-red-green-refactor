import capitalizeAndFilter from './capitalize-and-filter.js';

describe('capitalizeAndFilter', () => {
    it('takes an array of strings, capitalizes all strings, and filters out any string that starts with the letter F/f', () => {
        const strings = ['balderdash', 'flapdoodle', 'hogwash', 'poppycock'];
        expect(capitalizeAndFilter(strings)).toEqual([
            'Balderdash',
            'Hogwash',
            'Poppycock',
        ]);
    });
});
