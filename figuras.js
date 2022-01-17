//Codigo del cuadrado 
const perimetroCuadrado = (lado) =>{
   return lado * 4;
}

const areaCuadrado = (lado) =>{
    return lado * lado;
}

//Codigo del triangulo
const perimetroTriangulo = (lado1, lado2, base) =>{
   return lado1 + lado2 + base;
}

const areaTriangulo = (lado, base) =>{
    const altura = Math.sqrt((Math.pow(lado,2)) - (Math.pow((base/2),2)));
    return (base * altura) / 2;
}

//Codigo del circulo
const PI = Math.PI;

const diametroCirculo = (radio) =>{
    return radio * 2;
}

const perimetroCirculo = (radio) =>{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

const areaCirculo = (radio) =>{
    return (radio * radio) * PI;
}

//interaccion con HTML

const calcularPerimetroCuadrado = () =>{
    const input = document.getElementById("InputCuadrado").value;
    
    const perimetro = perimetroCuadrado(input);

    alert(perimetro);
}


