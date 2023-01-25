document.addEventListener("DOMContentLoaded", function () {
    var celsiusTextBox = document.getElementById("client-data-celsius");
    var fahrenheitTextBox = document.getElementById("fahrenheit");
    var kelvinTextBox = document.getElementById("kelvin");

    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        var celsiusText = celsiusTextBox.value.trim();

        var celsiusTemperature = Number(celsiusText);

        if (celsiusText.length == 0 || isNaN(celsiusTemperature)) {
            celsiusTextBox.classList.add("error-message");
            celsiusTextBox.value = "Введите число";
            return;
        }

        fahrenheitTextBox.value = (9 * celsiusTemperature / 5 + 32).toFixed(2);
        kelvinTextBox.value = (273.15 + celsiusTemperature).toFixed(2);
    });
});