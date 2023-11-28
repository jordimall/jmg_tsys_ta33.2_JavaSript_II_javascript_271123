document.addEventListener("DOMContentLoaded", function () {
    const comprobarNumero = valor => {
        return parseInt(valor);
    };

    const numDeCaracteres = num => {
        return num.toString().length;
    };

    let valor = comprobarNumero(
        prompt("Introduce el número que quieres saber los caracteres"),
    );
    
    while (isNaN(valor)) {
        valor = comprobarNumero(prompt("Has de introducir un número"));
    }

    alert(`El total de caracteres que tiene ${valor} es ${numDeCaracteres(valor)}`);
});
