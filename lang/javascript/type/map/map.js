let m = new Map()
m.set('dog', 'わんわん')
m.set('cat', 'にゃー')
m.set('mouse', 'チュー')
m.set(null, '')
m.set({}, 'object')
let key = {}
m.set(key, 'referenced object')

console.log('size', m.size)

for (let [key, value] of m) {
  console.log(key, value)
}

console.log(m.get({}))    // undefined
console.log(m.get(key))   // referenced objcet
