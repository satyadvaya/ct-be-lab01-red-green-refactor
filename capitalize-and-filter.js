const capitalizeAndFilter = (array) => {
    const filteredArray = [];

    array.map((string) => {
        string = string[0].toUpperCase() + string.slice(1);
        filteredArray.push(string);
    });
    return filteredArray.filter((string) => string[0] !== 'F');
};

export default capitalizeAndFilter;
