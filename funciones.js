const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < arreglo.length; i++) {


    if (i === 5) {
        break;
    }

    console.log(arreglo[i]);
}



for (let i = 0; i < arreglo.length; i++) {

    if (i === 5) {
 continue // se lo saltea
    }

    console.log(arreglo[i]);
}