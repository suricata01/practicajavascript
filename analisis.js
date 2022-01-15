//Helpers 
function esPar(numero) {
    return (numero % 2 === 0);
    
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }


  const salariosCol = colombia.map(
    (persona)=>{
        return persona.salary
    }
);
// // Ya no funciona en Mozilla o en general es mejor usar
// // funcion flecha.
// const salariosCol = colombia.map({
//     function(persona) {
//         return persona.salary;
//     }
// })

//Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
//Mediana General
const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB) {
        return salaryA-salaryB;
    }
);
const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del TOP 10 
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });