function mostrarFormulario(figura) {
    
    document.getElementById("form-cuadrado").style.display = "none";
    document.getElementById("form-rectangulo").style.display = "none";
    document.getElementById("form-triangulo").style.display = "none";
    document.getElementById("form-circulo").style.display = "none";
    document.getElementById("form-trapecio").style.display = "none";


    
    if (figura === "cuadrado") {
        document.getElementById("form-cuadrado").style.display = "block";
    } else if (figura === "rectangulo") {
        document.getElementById("form-rectangulo").style.display = "block";
    } else if (figura === "triangulo") {
        document.getElementById("form-triangulo").style.display = "block";
    } else if (figura === "circulo") {
        document.getElementById("form-circulo").style.display = "block";
    } else if (figura === "trapecio") {
        document.getElementById("form-trapecio").style.display = "block";
    
    //Borra el resultado anterior
    document.getElementById("resultado").innerHTML = "";
}


function calcularArea(tipo, base, altura, radio, baseMayor, baseMenor) {

    let area;

    if (tipo === "cuadrado") {
        area = base * base;
    }
    else if (tipo === "rectangulo") {
        area = base * altura;
    }
    else if (tipo === "triangulo") {
        area = (base * altura) / 2;
    }  
     else if (tipo === "circulo") {
        area = Math.PI * (radio * radio);
    }   
     else if (tipo === "trapecio") {
        area = ((baseMayor + baseMenor)* altura)/2;
       
    }     
    return area;
}

function calcularAreaCuadrado() {
    const lado = Number(document.getElementById("lado").value);
    const area = calcularArea("cuadrado", lado, lado);
    document.getElementById("resultado").innerHTML = "El área del cuadrado es: " + area;
}

function calcularAreaRectangulo() {
    const base = Number(document.getElementById("baseRectangulo").value);
    const altura = Number(document.getElementById("alturaRectangulo").value);
    const area = calcularArea("rectangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del rectángulo es: " + area;
}
function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);
    const area = calcularArea("triangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del triángulo es: " + area;
}

function calcularAreaCirculo() {
    const radio = Number(document.getElementById("radioCirculo").value);
    const area = calcularArea("circulo", radio);
    document.getElementById("resultado").innerHTML = "El área del circulo es: " + area;
}
function calcularAreaTrapecio() {
    const baseMayor = Number(document.getElementById("baseMayorTrapecio").value);
    const baseMenor = Number(document.getElementById("baseMenorTrapecio").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);
    const area = calcularArea("triangulo", baseMayor, baseMenor, altura);
    document.getElementById("resultado").innerHTML = "El área del trapecio es: " + area;
}

}