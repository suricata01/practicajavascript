//Codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}
function AreaCuadrado(lado) {
    return lado *lado;
}
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base){ 
    return lado1 + lado2 + base;
}
function AreaTriangulo(base,altura){
    return (base*altura) / 2;
}
function Alturatrianguloisoceles(lado,base){
    return Math.sqrt((lado * lado) -  ((base*base) /4) );
}
console.groupEnd();

//Codigo del Circulo
console.group("Circulo");
//PI
//const pi =3.1416;
const PI = Math.PI;
function DiametroCirculo(radio){
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
    const input = document.getElementById("Triangulo_InputLado1");
    const value = input.value;
    
    const input2 = document.getElementById("Triangulo_InputLado2");
    const value2 = input2.value;
    
    const input3 = document.getElementById("Triangulo_InputBase1");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value,value2,value3);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const input = document.getElementById("Triangulo_InputLado1");
    const value = input.value;
    const input2 = document.getElementById("Triangulo_InputBase1");
    const value2 = input2.value;
    const area = AreaTriangulo(value,value2);
    alert(area);
}
//Funciones del Circulo
function CalcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = DiametroCirculo(value);
    alert(diametro);   
}
function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);   
}
function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const Area = AreaCirculo(value);
    alert(Area);   
}