function loadData1(n){
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


loadData1(true).then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res);
}).finally(() => {
    console.log("finally executing");
})

loadData1(false).then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res);
}).finally(() => {
    console.log("finally executing");
})