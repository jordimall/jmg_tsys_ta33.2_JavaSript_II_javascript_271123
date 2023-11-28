document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const crearNumAleatorios = (min, max, cantidad) => {
        for (let index = 0; index < cantidad; index++) {
            console.log(Math.random() * (max - min) + min);
        }
    };

    var cantidad = comprobarNumero(
        prompt("Introduce la cantidad de numeros quieres generar"),
    );
    while (isNaN(cantidad)) {
        cantidad = comprobarNumero(prompt("Has de introducir un número"));
        console.log(cantidad);
    }

    var min = comprobarNumero(prompt("Introduce el valor minimo"));
    while (isNaN(min)) {
        min = comprobarNumero(prompt("Has de introducir un número"));
    }

    var max = comprobarNumero(
        prompt(`Intruduce el valor maximo, ha de ser superior a ${min}`),
    );
    while (isNaN(max) || max <= min) {
        max = comprobarNumero(
            prompt(`Intruduce el valor maximo, ha de ser superior a ${min}`),
        );
    }

    crearNumAleatorios(min, max, cantidad);
});
