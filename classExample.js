class vehicle{
    constructor(brand, type){
        this.brand = brand
        this.type = type
    }
     getDetails(){
        return this.brand+' '+this.type;
    }

}

const vehicle1 = new vehicle('honda', 'car')

console.log('my object ====. ', vehicle1.getDetails())