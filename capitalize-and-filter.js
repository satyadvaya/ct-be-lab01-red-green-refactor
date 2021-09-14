const capitalizeAndFilter = (array) => {
    const filteredArray = [];
    let capitalizedString = '';

    for (const string of array) {
        capitalizedString = string[0].toUpperCase() + string.slice(1);
        if (capitalizedString[0] !== 'F') {
            filteredArray.push(capitalizedString);
        }
    }
    return filteredArray;
};

export default capitalizeAndFilter;
