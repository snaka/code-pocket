let sym1 = Symbol('sym')
let sym2 = Symbol('sym')

console.log(typeof sym1)        // symbol
console.log(sym1.toString())    // Symbol(sym)
console.log(sym1 == sym2)       // false

//console.log(sym1 + '')          // TypeError
//console.log(sym1 - 0)           // TypeError
console.log(typeof(!!sym1))       // boolean

const MON = Symbol()
const TUE = Symbol()
const WED = Symbol()
const THE = Symbol()
const FRI = Symbol()
const SAT = Symbol()
const SUN = Symbol()

console.log(MON === MON)        // true
console.log(MON === TUE)        // false
