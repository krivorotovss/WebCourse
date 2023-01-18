(function () {
    var array = [15, 12, 11, 1, 2, 3, 0, 10];

    console.log("array = " + array)
    console.log("sortDescending = " + sortDescending(array));
    console.log("firstFiveElements = " + getFirstFiveElements(array));
    console.log("lastFiveElements = " + getLastFiveElements(array));
    console.log("evenNumbersSum = " + getEvenNumbersSum(array));
    console.log("newArray = " + createArray(100));
    console.log("evenNumbersSquares = " + getEvenNumbersSquares(createArray(100)));

    function sortDescending(array) {
        return array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    function getLastFiveElements(array) {
        return array.slice(array.length - 5);
    }

    function getEvenNumbersSum(array) {
        return array
            .filter(function (element) {
                return element % 2 === 0;
            })
            .reduce(function (sum, element) {
                return sum + element;
            }, 0);
    }

    function createArray(size) {
        var array = [];

        for (var i = 1; i <= size; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersSquares(array) {
        return array
            .filter(function (element) {
                return element % 2 === 0;
            })
            .map(function (element) {
                return element * element;
            });
    }
})();