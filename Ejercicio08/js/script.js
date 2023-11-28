document.addEventListener("DOMContentLoaded", function () {
    let array = new Array(10);

    const comprobarNumero = valor => {
        return parseFloat(valor).toFixed(2);
    };

    const mostrarArray = array => {
        alert("El resoltado se mostrara por consola");
        for (let index = 0; index < array.length; index++) {
            console.log(`En la posición ${index} el valor es ${array[index]}`);
        }
    };

    const rellenarArray = array => {
        let i = 0;

        while (i < array.length) {
            valor = comprobarNumero(
                prompt(`Introduce el valor ${i + 1} de ${array.length}`),
            );

            if (!isNaN(valor)) {
                array[i] = valor;
                i++;
            }
        }
        mostrarArray(array);
    };

    rellenarArray(array);
});
