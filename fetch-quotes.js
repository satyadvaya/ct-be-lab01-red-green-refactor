import fetch from 'node-fetch';

const fetchQuotes = async () => {
    const url = 'https://futuramaapi.herokuapp.com/api/quotes';
    const response = await fetch(url);
    const body = await response.json();

    return {
        name: body[0].character,
        text: body[0].quote,
        image: body[0].image,
    };
};

export default fetchQuotes;
