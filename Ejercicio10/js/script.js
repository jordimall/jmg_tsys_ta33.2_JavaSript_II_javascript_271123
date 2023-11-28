document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const mostrarNumMayor = array => {
        alert("El resoltado se mostrara por consola");
        console.log("El mayor número en el array es:", Math.max(...array));
    };

    const comprobarNumPrimo = num => {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const rellenarArray = (array, min, max) => {
        let index = 0;
        while (index < array.length) {
            let num = Math.floor(Math.random() * (max - min) + min);
            if (comprobarNumPrimo(num)) {
                array[index] = num;
                index++;
            }
        }
    };

    let valor = comprobarNumero(prompt("Introduce la dimension del array"));

    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    let min = comprobarNumero(prompt("Introduce el valor minimo"));
    while (isNaN(min)) {
        min = comprobarNumero(prompt("Has de introducir un número"));
    }

    let max = comprobarNumero(
        prompt(`Intruduce el valor maximo, ha de ser superior a ${min}`),
    );
    while (isNaN(max) || max <= min) {
        max = comprobarNumero(
            prompt(`Intruduce el valor maximo, ha de ser superior a ${min}`),
        );
    }

    let array = new Array(valor);

    rellenarArray(array, min, max);
    mostrarNumMayor(array);
});
