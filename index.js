//////////////////////////////////
// Pair Programming
//////////////////////////////////

//////////////////////////////////
// Declarando variables
//////////////////////////////////

// 1.- variable tipo let de nombre 'variableSinValor' está declarada sin valor
// Es de tipo let
// no tiene valor asignado
let variableSinValor

// 2.- 2 variables tipo let de nombres 'booleano1' y 'booleano2' está declarada y es de tipo booleano
// booleano1 es de tipo let
// booleano1 es booleano
// booleano2 es de tipo let
// booleano2 es booleano
let booleano1 = true
let booleano2 = false

// 3.- variable tipo const de nombre 'PI' está declarada con valor de 3,14
// Es de tipo const
// tiene valor 3.14
const PI = 3.14

// 4.- variable tipo const de nombre 'TAU' está declarada con valor de 2 veces PI
// Es de tipo const
// tiene valor 2PI
const TAU = (2 * PI)


//////////////////////////////////
// Booleanos
//////////////////////////////////
 
// 5.- variable 'booleanoAnd' cuyo valor sea la comparación booleana 'booleano1 and booleano2'
let booleanoAnd = (booleano1 === booleano2)

// 6.- variable 'booleanoNot' cuyo valor sea la comparación booleana 'no booleano1'
let booleanoNot = (!booleano1)

// 7.- variable 'booleanoMix0' cuyo valor sea la comparación booleano '(booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)'
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))


//////////////////////////////////
// Operadores
//////////////////////////////////

// 8.- crea la variable 'incrementarDesp' con valor 2 y asigna su valor con postincremento a 'resultadoDesp'
// incrementarDesp vale 2
// resultadoDesp tienen el valor correcto
let incrementarDesp = 2
let resultadoDesp = incrementarDesp++

// 9.- crea la variable 'incrementarAntes' con valor 2 y asigna su valor con preincremento a 'resultadoAntes'
// incrementarAntes vale 2
// resultadoAntes tienen el valor correcto
let incrementarAntes = 2
let resultadoAntes = ++incrementarAntes


//////////////////////////////////
// Bucles FOR
//////////////////////////////////

// 10.- crea la variable 'contarHasta10_2' con valor 0 e incrementa su valor con un bucle for hasta que se verifique contarHasta10_2 === 10
let contarHasta10_2 = 0

// Bucle for
for (let i = 1; i <= 10; i++) {
    contarHasta10_2 = i
}

// // Bucle while
// let i = 1
// while (i <= 10) {
//     contarHasta10_2 = i
//     i++
// }

// 11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++
let postI = 0
let postJ = 0

// Bucle for
for (let i = 1; i <= 11; i++) {
    postI += postJ++ 
}

// // Bucle while
// let i = 1
// while (i <= 11) {
//     postI += postJ++
//     i++
// }

// 12.- crea la variable 'sumaPares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), 
// si la iteración es par se deberá asumar a sumaPares el número de la iteración actual (i)
let sumaPares = 0

// Bucle for
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        // sumaPares = sumaPares + i;
        sumaPares += i
    }
}
// console.log(sumaPares)

// // Bucle while
// let i = 1
// while (i < 10) {
//     if (i % 2 == 0) {
//         sumaPares += i
//     }
//     i++
// }
// // console.log(sumaPares)



//////////////////////////////////
// proyecto
//////////////////////////////////

//////////////////////////////////
// Declarando variables
//////////////////////////////////

// 13.- variable tipo let de nombre 'variableValorNumerico' está declarada con valor numérico
// Es de tipo let
// tiene valor numérico
let variableValorNumerico = 13

// 14.- variable tipo const de nombre 'MiNombre' está declarada con valor de tu nombre
// Es de tipo const
// tiene valor cadena de texto
const MiNombre = "Ego"

// 15.- variable tipo const de nombre 'MiNumeroFav' está declarada con valor numérico
// Es de tipo const
// tiene valor numérico
const MiNumeroFav = 5;


//////////////////////////////////
// Booleanos
//////////////////////////////////

// 16.- variable 'booleanoOr' cuyo valor sea la comparación booleana 'booleano1 or booleano2'
let booleanoOr = (booleano1 || booleano2)

// 17.- variable 'booleanoMix1' cuyo valor sea la compración booleana '(booleano1 and TAU/2 sea igual a PI) or (variableValorNumerico mayor o igual que MiNumeroFav)'
let booleanoMix1 = (((booleano1 && (TAU/2)) === PI) || (variableValorNumerico >= MiNumeroFav))

// 18.- variable 'seisNoEsNueve' cuyo valor sea la comparación booleana '6 no es igual que 9'
let seisNoEsNueve = (6 !== 9)

// 19.- variable 'booleanoMix2' cuyo valor sea la comparación booleana 'variableValorNumerico positivo o menor que -(MiNumeroFav * TAU)
let booleanoMix2 = ((variableValorNumerico > 0) || (variableValorNumerico < (-(MiNumeroFav * TAU))))


//////////////////////////////////
// Operadores
//////////////////////////////////

// 20.- variable 'valorSuma' cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
let valorSuma = (MiNumeroFav + variableValorNumerico)

// 21.- variable 'valorResta' cuyo valor sea la resta de MiNumeroFav menos variableValorNumerico
let valorResta = (MiNumeroFav - variableValorNumerico)

// 22.- variable 'valorMultiplicacion' cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
let valorMultiplicacion = (MiNumeroFav * variableValorNumerico)

// 23.- variable 'valorDivision' cuyo valor sea la division de MiNumeroFav entre 3
let valorDivision = (MiNumeroFav / 3)


//////////////////////////////////
// Bucles WHILE
//////////////////////////////////

// 24.- crea la variable 'contarHasta10' con valor 0 e incrementa su valor con un bucle while hasta que se verifique contarHasta10 === 10
let contarHasta10 = 0

let i = 1
while (i <= 10) {
    contarHasta10 = i
    i++
}

// 25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
let preI = 0
let preJ = 0

i = 1
while (i <= 11) {
    preI += ++preJ
    i++
}


// 26.- crea la variable 'sumaImpares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), 
// si la iteración es impar se deberá asumar a sumaPares el número de la iteración actual (i)
let sumaImpares = 0

i = 0
while (i < 10) {
    if (i % 2 !== 0) {
        sumaImpares += i
    }
    i++
}