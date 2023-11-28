document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor).toFixed(2);
    };

    const comprovarSimbolo = valor => {};

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
        prompt("Introduce el número que quieres saber los caracteres"),
    );

    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    let simbolo = comprovarSimbolo(
        prompt(
            "Introduce el simbolo de la moneda que quieres convertir $(dolar), ¥(yenes) o £(libra)",
        ),
    );
    while (!["$", "¥", "£"].includes(simbolo)) {
        valor = comprobarNumero(
            prompt(
                "Has de introducir el simbolo de la moneda que quieres convertir $(dolar), ¥(yenes) o £(libra)",
            ),
        );
    }

    alert(`La conversion de ${valor}€ es ${conversor(valor, simbolo)}`);
});
