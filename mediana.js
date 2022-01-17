
const list1 = [200,500,100,800,9000,4500,2120]

const mitadList1 = parseInt(list1.length / 2);

let mediana;

const esPar = (numerito) =>{
    if(numerito % 2 === 0){
        return true;
    }else {
        return false
    }
}

if(esPar(list1.length)){
    const elemento1 = list1[mitadList1 - 1];
    const elemento2 = list1[mitadList1];

    const promedio = calcularPromedio([elemento1,elemento2]);

    mediana += promedio;

}else {
    mediana = list1[mitadList1];
}

const calcularPromedio = (list) =>{
    let sumlist = 0;

    list.forEach(value =>{
        sumlist += value;
    })

    const promedio = sumlist / list.length;

    return promedio
}

console.log(list1.sort((a,b) => a-b));

console.log(calcularPromedio(list1));