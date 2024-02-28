let obj = {
    name: 'sujit',
    age: 25,
    a: 7,
    b: 9
};
(function(){
    console.log(obj.name+' '+obj.age)
})(obj);

let sum = (obj) => obj.a+obj.b;

console.log('sum ===> ',sum(obj));