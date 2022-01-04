//Codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}
function AreaCuadrado(lado) {
    return lado *lado;
}
//const ladoCuadrado = 5;
//console.log("Lado del cuadrado miden:" + ladoCuadrado);
//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadro mide: " + perimetroCuadrado + "cm");
//const AreaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El Area del cuadrado mide: " + AreaCuadrado + "cm2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function AreaTriangulo(base,altura){
    return (base*altura)/2;
}
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const BaseTriangulo = 4;
//const AlturaTriangulo = 5.5;
//console.log("Los lados del triangulos miden: " + ladoTriangulo1 
//+ "cm, " + ladoTriangulo2 + "cm, " + BaseTriangulo + "cm");
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + BaseTriangulo;
//console.log("El perimetro del Triangulo mide: " + perimetroTriangulo + "cm");
//const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
//console.log("El Area del Triangulo mide: " + AreaTriangulo + "cm2");
function Alturatrianguloisoceles(lado,base){
    return Math.sqrt((lado * lado) -  ((base*base) /4) );
}
console.groupEnd();

//Codigo del Circulo

console.group("Circulo");
//PI
//const pi =3.1416;
const PI = Math.PI;
function DiametroCirculo(Radio){
    return radio *2;
}
function perimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro *PI;
}
function AreaCirculo(radio)
{
    return (radio*radio) *PI;
}

//Radio
//const RadioCirculo = 4;
//console.log("El Radio del Circulo mide: " + RadioCirculo + "cm");
//Diametro
//const DiametroCirculo = RadioCirculo * 2;
//console.log("El diametro del Circulo mide: " + DiametroCirculo + "cm");
//Circureferencia
//const perimetroCirculo = DiametroCirculo * PI;
//console.log("El perimetro del Circulo mide: " + perimetroTriangulo + "cm");
// Area
//const AreaCirculo = (RadioCirculo* RadioCirculo) * PI;
//console.log("El Area del Circulo mide: " + AreaCirculo + "cm");
console.groupEnd();
// Aqui intectuamos con el HTML
//Funciones del Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area =AreaCuadrado(value);
    alert(area);   
}
//Funciones del Triangulo
function CalcularAlturaIsoceles(){
    const input = document.getElementById("Triangulo_InputLado");
    const value = input.value;
    const input2 = document.getElementById("Triangulo_InputBase");
    const value2 = input2.value;
    const altura = Alturatrianguloisoceles(value,value2);
    alert(altura);
}
function CalcularPerimetroTriangulo(){
    const input = document.getElementById("Triangulo_InputLado");
    const value = input.value;
    
    const input2 = document.getElementById("Triangulo_InputBase");
    const value2 = input2.value;
    
    const input3 = document.getElementById("Triangulo_Inputlado");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value,value2,value3);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const input = document.getElementById("Triangulo_InputLado");
    const value = input.value;
    const input2 = document.getElementById("Triangulo_InputBase");
    const value2 = input2.value;
    const area = AreaTriangulo(value,value2);
    alert(area);
}
//Funciones del Circulo
function CalcularDiametroCirculo(){
    const input = document.getElementById("Triangulo_InputLado");
    const value = input.value;
    const diametro = DiametroCirculo(value);
    alert(diametro);   
}
function CalcularPerimetroCirculo(){
    const input = document.getElementById("Triangulo_InputLado");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);   
}
function CalcularAreaCirculo(){
    const input = document.getElementById("Triangulo_InputLado");
    const value = input.value;
    const Area = AreaCirculo(value);
    alert(Area);   
}