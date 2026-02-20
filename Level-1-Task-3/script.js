document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("convertBtn").addEventListener("click", function () {

        var value = document.getElementById("temp").value;
        var unit = document.getElementById("unit").value;
        var result = document.getElementById("result");

        if (value === "" || isNaN(value)) {
            result.innerHTML = "Enter a valid number";
            return;
        }

        value = parseFloat(value);
        var answer;

        if (unit === "C") {
            answer = (value * 9 / 5) + 32;
            result.innerHTML = answer.toFixed(2) + " °F";
        } else {
            answer = (value - 32) * 5 / 9;
            result.innerHTML = answer.toFixed(2) + " °C";
        }

    });

});
