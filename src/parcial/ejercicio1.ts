
const filas: number = 5;

for (let i = 1; i <= filas; i++) {
    let fila: string = '';
    for (let j = 1; j <= i; j++) { 
        fila += j + ' ';
    }
    // Imprimir la fila
    console.log(fila.trim()); 
}