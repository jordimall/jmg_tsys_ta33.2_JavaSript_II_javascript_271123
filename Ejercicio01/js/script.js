var span1 = document.getElementById("span1");
var figura = "Circulo";

const modificarFormulario = () => {
    figura = document.getElementById("figura").value;
    let div2 = document.getElementById("div2");

    switch (figura) {
        case "Triangulo":
            span1.innerText = "base: ";
            div2.removeAttribute("hidden", "");
            break;
        case "Cuadrado":
            span1.innerText = "lado: ";
            div2.setAttribute("hidden", "");
            break;

        default:
            span1.innerText = "radio: ";
            div2.setAttribute("hidden", "");
            break;
    }
};

const calcularAreaCirculo = radio => {
    return Math.PI * Math.pow(radio, 2);
};

const calcularAreaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};

const calcularAreaCuadrado = lado => {
    return lado * lado;
};

const comprobarNumero = num => {
    let result = Number.MIN_VALUE;

    if (num != "") {
        result = parseFloat(num);
    }
    return result;
};

const validarCampo = num => {
    return comprobarNumero(num) == Number.MIN_VALUE;
};

const calcular = () => {
    let result = document.getElementById("Resultat");
    let input1 = document.getElementById("num1");
    let input2 = document.getElementById("num2");
    let comprobante = figura;
    let message = "El area de el ";

    if (validarCampo(input1.value)) comprobante = "";
    if (comprobante == "Triangulo") {
        if (validarCampo(input2.value)) comprobante = "";
    }

    switch (comprobante) {
        case "Circulo":
            message +=
                `circulo con un radio de ${input1.value} ` +
                `  es de: ${calcularAreaCirculo(input1.value)}`;
            break;
        case "Cuadrado":
            message +=
                `cuadrado con un lado de ${input1.value} ` +
                ` es de: ${calcularAreaCuadrado(input1.value)}`;
            break;
        case "Triangulo":
            message +=
                `triangulo con una base de ${input1.value}` +
                ` y una altura de ${input2.value} es de: ` +
                ` ${calcularAreaTriangulo(input1.value, input2.value)}`;
            break;

        default:
            message = "Debes de introducir un numero.";
            break;
    }

    result.innerText = message;
    input1.value = "";
    input2.value = "";
};
