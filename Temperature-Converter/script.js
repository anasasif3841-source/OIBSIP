
function convertTemperature() {
    let temperature = parseFloat(
        document.getElementById("temperature").value
    );

    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid temperature!";
        return;
    }

    let celsius;

    if (unit === "celsius") {
        celsius = temperature;
    } else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    if (celsius < -273.15) {
        result.innerHTML = "Temperature cannot be below absolute zero!";
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    result.innerHTML =
        "Celsius: " + celsius.toFixed(2) + " °C<br>" +
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
        "Kelvin: " + kelvin.toFixed(2) + " K";
}
