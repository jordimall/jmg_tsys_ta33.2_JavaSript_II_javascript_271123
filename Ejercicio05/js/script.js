document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const aBinario = num => {
        return num.toString(2);
    };

    let valor = comprobarNumero(
        prompt("Introduce el número que quieres pasar a binario"),
    );
    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    alert(`El binario de ${valor} es ${aBinario(valor)}`);
});
