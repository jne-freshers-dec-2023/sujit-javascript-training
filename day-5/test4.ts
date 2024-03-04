class obj2{
    constructor(private a?:number , private b?:number){

    }
    printVar(){
        console.log(this.a+" "+this.b);
    }
}

const object2 = new obj2(58,67);

object2.printVar()

