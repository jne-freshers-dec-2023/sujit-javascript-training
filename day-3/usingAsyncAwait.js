function loadData1(n= false){
    let status = n;
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                if (status) {
                    resolve({ message: "Data loaded" });
                } else {
                    reject({ message: "ERROR: Data not loaded" });
                }
            }, 3000
        )
    })
}

async function getData(){
    try{
    const data = await loadData1(true);
    console.log(data);
    }catch(e){
        console.log(e)
    }finally{
        console.log('Finally executed');
    }
}

getData();