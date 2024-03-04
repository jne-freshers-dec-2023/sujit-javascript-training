const p1 = new Promise(function (resolve, rejctect) {
    setTimeout(function () {
        let isErrror = true
        if (!isErrror) {
            resolve({ name: 'sujit', age: 25 });
        } else {
            rejctect('Error founnd')
        }
    }, 2000)
})

p1.then(function (data) {
    console.log(data)
    return data.name;
})
.then(function(name){
    console.log(name)
})
.catch(function (error) {
    console.log(error)
})
.finally(function(){
    console.log('finally executed ')
})