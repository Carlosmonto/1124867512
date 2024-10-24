const num = [1, 2, 3, 4, 5];
console.log('el array de numeros es', num);
num.push(6);
console.log('el numero agregado', num);
const ulEliminado = num.pop();
console.log('Número eliminado:', ulEliminado);
const numAlCuadrado = num.map(num => Math.pow(num, 2));
console.log('Números al cuadrado:', numAlCuadrado);
const indBuscado = 3;
const elementoEnIndice3 = num[indBuscado];
console.log(`El elemento en el índice ${indBuscado} es:`, elementoEnIndice3);
const numPares = num.filter(num => num % 2 === 0);
console.log("Números pares del array:", numPares);
const frutas = ['mango', 'banano', 'piña', 'sandia'];
console.log('las frutas son', frutas);
const boleans = [false, true];
console.log(boleans);
const tuplas = [
    [1, 'uno'],
    [2, 'dos'],
    [3, 'tres'],
    [4, 'cuatro'],
    [5, 'cinco']
];
console.log('Array de tuplas (número, palabra):', tuplas);
//# sourceMappingURL=ejercicio2.js.map