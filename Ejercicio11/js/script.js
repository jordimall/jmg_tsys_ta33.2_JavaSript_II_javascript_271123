document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const rellenarArray = (array, min, max) => {
        for (let index = 0; index < array.length; index++) {
            array[index] = Math.floor(Math.random() * (max - min) + min);
        }
    };

    const multiplicarArrays = (array1, array2) => {
        let arrayResultado = [];
        for (let index = 0; index < array1.length; index++) {
            arrayResultado[index] = array1[index] * array2[index];
        }
        return arrayResultado;
    };

    let valor = comprobarNumero(prompt("Introduce la dimension del array"));

    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    const MIN = 0;
    const MAX = 9;

    let array1 = new Array(valor);
    let array2 = new Array(valor);

    rellenarArray(array1, MIN, MAX);

    array2 = [...array1];
    rellenarArray(array2, MIN, MAX);

    let arrayFinal = multiplicarArrays(array1, array2);

    console.log("Array 1:", array1);
    console.log("Array 2:", array2);
    console.log("Array Multiplicado:", arrayFinal);
});
