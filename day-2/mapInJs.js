let myMap = new Map();
myMap.set('sujit', 25).set('rohit', 27).set('pintu', 23)
console.log(myMap)
myMap.clear()
console.log(myMap)

let myMap2 = new Map([
    ['sujit', 25],
    ['rohit', 27],
    ['pintu', 23],
]);
console.log(myMap2.entries())

myMap2.forEach((name , age)=> console.log(`${age}: ${name}`))

console.log(myMap2.get('sujit'))
console.log(myMap2.has('sujit'))
console.log(myMap2.keys())
console.log(myMap2.values())

