document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const mostrarArray = array => {
        alert("El resoltado se mostrara por consola");
        for (let index = 0; index < array.length; index++) {
            console.log(`En la posición ${index} el valor es ${array[index]}`);
        }
    };

    const rellenarArray = (array, min, max) => {
        for (let index = 0; index < array.length; index++) {
            array[index] = Math.floor(Math.random() * (max - min) + min);
        }
    };

    let valor = comprobarNumero(prompt("Introduce la dimension del array"));

    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    const MIN = 0;
    const MAX = 9;

    let array = new Array(valor);

    rellenarArray(array, MIN, MAX);

    mostrarArray(array);
});
