//helpers
const esPar = (numero) =>{
    return (numero % 2 === 0)
}

const calcularPromedio = (list) =>{
    let sumlist = 0;

    list.forEach(value =>{
        sumlist += value;
    })

    const promedio = sumlist / list.length;

    return promedio
}

//calcular media
const medianaSalaryGuate = (list) =>{
    const mitad = parseInt(list.length / 2);

    if (esPar(list.length)) {
        const personaMitad1 = list[mitad - 1];
        const personaMitad2 = list[mitad];

        const mediana = calcularPromedio([personaMitad1,personaMitad2]);
        
        return mediana;
    } else {
        const persMitad = list[mitad];
        
        return persMitad;
    }
}

//Mediana general

const salaryGuate = Guatemala.map((persona) => {
    return persona.salary
})

const salaryGuateSorted = salaryGuate.sort((a,b)=> {
    return a - b;
})

const medianaGeneralGuate = medianaSalaryGuate(salaryGuateSorted);

//Mediana de top 10%
const spliceStart = (salaryGuateSorted.length * 90) / 100;
const spliceCount = salaryGuateSorted.length - spliceStart;
const salarioGtTop10 = salaryGuateSorted.splice(spliceStart,spliceCount)

const medianaTop10 = medianaSalaryGuate(salarioGtTop10)


console.log({medianaGeneralGuate,medianaTop10});



