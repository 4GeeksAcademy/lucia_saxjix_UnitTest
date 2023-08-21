// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) =>{
    let conversionDollar = euro * oneEuroIs["USD"]
    return conversionDollar
}

const fromDollarToEuro = (dollar) =>{
    let conversionEuro = dollar / oneEuroIs["USD"]
    return conversionEuro
}

const fromDollarToYen = (dollar) =>{
    let conversionEuro = fromDollarToEuro(dollar)
    let conversionYen = conversionEuro * oneEuroIs["JPY"]
    return conversionYen
}
//console.log(fromDollarToYen(1))//

const fromYenToEuro = (yen) =>{
    let conversionYenEuro = yen / oneEuroIs["JPY"]
    return conversionYenEuro
}

const fromYenToPound = (yen) => {
    let conversionYenEuro = fromYenToEuro (yen)
    let conversionToPound = conversionYenEuro * oneEuroIs["GBP"]
    return conversionToPound 
}
console.log(fromYenToPound(1))
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToEuro, fromDollarToYen,fromYenToPound};

