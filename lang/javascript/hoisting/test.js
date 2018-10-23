var scope = 'global'

function getValue() {
  console.log(scope)    // undefined
  var scope = 'local'
  return scope
}

console.log(getValue()) // local
console.log(scope)      // global
