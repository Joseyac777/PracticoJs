
const lista = [1,2,3,12,1,2,4,5,1,2,1,3,6,5,2,2,2,1]

const calcularModa = (arrList) =>{
    const listCount = {};

    //Cuenta los elementos repetidos en un array 
    arrList.map((elemento) => {
        if(listCount[elemento]){
            listCount[elemento] += 1;
        }else {
            listCount[elemento] = 1;
        }
    });

    const listArray = Object.entries(listCount).sort((valorA, nuevoV) => {
        return valorA[1] - nuevoV[1]
    });

    const moda = listArray[listArray.length -1];

    return moda
}

console.log(calcularModa(lista));
