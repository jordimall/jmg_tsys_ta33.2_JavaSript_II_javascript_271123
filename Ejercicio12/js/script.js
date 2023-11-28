document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const rellenarArray = (array, min, max) => {
        for (let index = 0; index < array.length; index++) {
            array[index] = Math.floor(Math.random() * (max - min) + min);
        }
    };

    const filtrarPorDigito = (array, digito) => {
        return array.filter(numero => numero % 10 === digito);
    };

    let valor = comprobarNumero(prompt("Introduce la dimension del array"));

    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    let filtro = comprobarNumero(
        prompt("Introduce el numero por el que quires filtrar"),
    );

    while (isNaN(filtro)) {
        filtro = comprobarNumero(prompt("Has de introducir un número"));
    }

    const MIN = 0;
    const MAX = 300;

    let array = new Array(valor);

    rellenarArray(array, MIN, MAX);

    let arrayFinal = filtrarPorDigito(array, filtro);

    console.log("Array: ", array);

    console.log(`Array filtrado por: ${filtro}`, arrayFinal);
});
