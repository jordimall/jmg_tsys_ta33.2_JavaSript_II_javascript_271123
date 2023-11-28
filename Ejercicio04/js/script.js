document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const calcularFactorial = num => {
        let result = num;
        if (num === 0 || num === 1) {
            result = 1;
        } else {
            for (let index = num - 1; index > 0; index--) {
                result *= index;
            }
        }

        return result;
    };

    let valor = comprobarNumero(
        prompt("Introduce el número que quieres calcular el factorial"),
    );
    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    alert(`El factorial de ${valor} es ${calcularFactorial(valor)}`);
});
