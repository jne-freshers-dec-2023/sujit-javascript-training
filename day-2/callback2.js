const system = false;
function process(scallback,ecallback){
    setTimeout(function(){
        if(system){
            scallback({
                name:"hp",
                type: "laptop"
            })
        }else{
            ecallback('system not available')
        }
    },2000)
}

process((success)=> {
    console.log(success)
},(error) => {
    console.log(error)  
})