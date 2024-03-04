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

async function consumeP1(){
    try{
        const op = await p1;
        console.log(op)
    }catch(e){
        console.log(e)
    }
}

consumeP1();
