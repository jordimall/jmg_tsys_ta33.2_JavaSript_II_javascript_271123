document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const comprobarNumPrimo = num => {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    let valor = comprobarNumero(
        prompt("Introduce el número que quieres comprovar"),
    );
    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    alert(comprobarNumPrimo(valor));
});
