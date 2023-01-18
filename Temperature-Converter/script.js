document.addEventListener("DOMContentLoaded", function () {
    var celsiusTextBox = document.getElementById("client-data-celsius");
    var fahrenheitTextBox = document.getElementById("fahrenheit");
    var kelvinTextBox = document.getElementById("kelvin");

    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function (e) {
        var celsiusText = celsiusTextBox.value.trim();

        fahrenheitTextBox.value = (9 * Number(celsiusText) / 5 + 32).toFixed(2);
        kelvinTextBox.value = (273.15 + Number(celsiusText)).toFixed(2);
    });

});