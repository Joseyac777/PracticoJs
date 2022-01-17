
const list1 = [100,200,300,500];

const calcularPromedio = (list) =>{
    let sumlist = 0;

    list.forEach(value =>{
        sumlist += value;
    })

    const promedio = sumlist / list.length;

    return promedio
}

let d = calcularPromedio([100,200,300,400])

console.log(d);
