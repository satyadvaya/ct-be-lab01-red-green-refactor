import fetchQuotes from './fetch-quotes.js';

describe('fetchQuotes', () => {
    it('returns an object consisting of name, text, and image key value pairs', async () => {
        const quote = await fetchQuotes();
        expect(quote).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String),
        });
    });
});
