var array = [15, 12, 11, 1, 2, 3, 0, 10];

console.log("array = " + array)
console.log("descendingSortArray = " + descendingSort(array));
console.log("fiveElementsFirst = " + getArrayFiveElementsFirst(array));
console.log("fiveElementsLast = " + getArrayFiveElementsLast(array));
console.log("evenNumbersSum = " + getEvenNumbersSum(array));
console.log("newArray = " + createArray(100));
console.log("squaresEvenNumbers = " + getSquaresEvenNumbers(createArray(100)));

function descendingSort(array) {
    return array.sort(function (e1, e2) {
        return e2 - e1;
    });
}

function getArrayFiveElementsFirst(array) {
    return array.slice(0, 5);
}

function getArrayFiveElementsLast(array) {
    return array.slice(array.length - 5);
}

function getEvenNumbersSum(array) {
    return array.filter(
        function (element) {
            return element % 2 === 0;
        }).reduce(
        function (sum, element) {
            return sum + element;
        }, 0)
}

function createArray(number) {
    var array = [];

    for (var i = 1; i <= number; i++) {
        array.push(i);
    }

    return array;
}

function getSquaresEvenNumbers(array) {
    return array.filter(
        function (element) {
            return element % 2 === 0;
        }).map(
        function (element) {
            return element * element;
        });
}