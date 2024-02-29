function loadData(success,error){
    setTimeout(
        function(){
            let status = false;
            if(status){
            console.log('loading data')
            success()
            }
        else{
            console.log('loading data failed')
            error()
        }
        },5000
    )
}

loadData(function (){
    console.log('Data loaded');
},function(){
    console.log('clould not load Data');
})