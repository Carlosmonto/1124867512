// arrays de numeros
const num: number[]=[1,2,3,4,5];
console.log('el array de numeros es',num)
num.push(6);
console.log('el numero agregado',num)
// Eliminar el último número del array
const ulEliminado = num.pop();
console.log('Número eliminado:', ulEliminado);

// Elevar al cuadrado los números
const numAlCuadrado: number[] = num.map(num => num ** 2);
console.log('Números al cuadrado:', numAlCuadrado);
// Buscar el elemento en el índice 3
const indBuscado = 3;
const elementoEnIndice3 = num[indBuscado];
console.log(`El elemento en el índice ${indBuscado} es:`, elementoEnIndice3);



// Filtrar los números pares
const numPares: number[] = num.filter(num => num % 2 === 0);

console.log('Números pares del array:', numPares);

// Usar reduce para sumar todos los números
const sumTotal: number = num.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log('La suma de todos los números del array es:', sumTotal);

// Verificar si algún número es mayor que 40
const numMay: boolean = num.some(num => num > 40);

console.log('Hay algún números mayor que 40', numMay);

// combinar arrays [1,2,3] y [4,5,6]
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

// Combinar los arrays
const combi: number[] = [...array1, ...array2];

console.log('Array combinado usando el operador de propagación:', combi);








// arrays de frutas

const frutas: string[]=['mango','banano','piña','sandia'];
console.log('las frutas son',frutas)
// array de boleanos 
const boleans: Boolean[]=[false,true];
console.log(boleans)
// array de tuplas 
const tuplas: [number, string][]=[
[ 1, 'uno'],
[ 2, 'dos'],
[ 3, 'tres'],
[ 4, 'cuatro'],
[ 5, 'cinco']
];
console.log('Array de tuplas (número, palabra):', tuplas);





