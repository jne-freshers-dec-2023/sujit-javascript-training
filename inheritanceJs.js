class car{
    constructor(wheels){
        this.wheels= wheels;
    }
    runs(){
        console.log('runs with '+this.wheels+' wheels')
    }
}

class airoplane extends car{
    constructor(wheels){
        super(wheels);
    }
    flyes(){
        console.log('flyes in air ')
    }
}
const obj1 = new airoplane(3);
console.log(obj1.wheels)
obj1.runs()
obj1.flyes()
