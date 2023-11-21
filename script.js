(1)
function isMultipleOfThree(number) {
    return number % 3 === 0;
}

(2)
function getCurrencySymbolFromCode(currencyCode) {
    switch (currencyCode) {
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'GEL':
            return 'ლ';
        default:
            return null;
    }
}
(3)
function convertToUpperCase(inputString) {
    return inputString.toUpperCase();
}
(4)
function calculateProfit(costPrice, sellingPrice) {
    const profit = sellingPrice - costPrice;
    const profitPercentage = (profit / costPrice) * 100;
    return profitPercentage;
}
(5)
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
(6)
function findObjectByName(objectsArray, nameToFind) {
    return objectsArray.find(obj => obj.name === nameToFind);
}
