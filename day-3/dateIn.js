let myDate = new Date();

console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.toISOString())

let myDate2 = new Date("2023", 0,21,15,35,20);
console.log(myDate2.toLocaleString())
console.log(myDate2.getMonth()+1)
console.log(myDate2.toLocaleString())