class obj {
    x: number;
    y: number;
    sum(){
        console.log(this.x+this.y);
    }
    printVar(){
        console.log(this.x+" "+this.y);
    }
}

let object1 = new obj();
object1.x= 10;
object1.y= 20;
object1.printVar();
