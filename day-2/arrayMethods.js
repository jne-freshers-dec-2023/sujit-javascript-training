const items =[
    {name:'sujit', age:25},
    {name:'rohit', age:26},
    {name:'adarsh', age:24},
    {name:'dibakar', age:23},
    {name:'ranjit', age:27}
]

const items2 = [1,2,3,4,5,6]

let morethan25 = items.filter((item)=> item.age> 25)
console.log(morethan25);

let storeNmae = items.map((item)=> item.name)
console.log(storeNmae);

let findObj = items.find((item)=> item.age == 25)
console.log(findObj);

items.forEach((item)=> console.log(item.name))

let ifAge = items.some((item)=> item.age == 29)
console.log(ifAge);

let ifAllAge = items.every((item)=> item.age <= 29)
console.log(ifAllAge);

let sumOfAge = items.reduce((sum,item) => { return item.age+sum},0)
console.log(sumOfAge);

let checkInclude = items2.includes(9)
console.log(checkInclude);
