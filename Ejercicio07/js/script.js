document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseFloat(valor).toFixed(2);
    };

    const conversor = (num, condicion) => {
        let result;
        switch (condicion) {
            case "$":
                result = num * 1.28611;
                break;
            case "¥":
                result = num * 123.61;
                break;

            default:
                result = num * 0.86;
                break;
        }
        return result.toFixed(2);
    };

    let valor = comprobarNumero(
        prompt("Introduce la cantidad que quieres convertir"),
    );

    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    let simbolo = prompt(
        "Introduce el simbolo de la moneda que quieres convertir $(dolar), ¥(yenes) o £(libra)",
    );

    while (!["$", "¥", "£"].includes(simbolo)) {
        simbolo = prompt(
            "Has de introducir el simbolo de la moneda que quieres convertir $(dolar), ¥(yenes) o £(libra)",
        );
    }

    console.log(simbolo);

    alert(
        `La conversion de ${valor}€ es ${conversor(valor, simbolo)} ${simbolo}`,
    );
});
