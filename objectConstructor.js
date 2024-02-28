function Values(a,b){
    this.a=a;
    this.b =b;
    this.add = function(){
        return this.a+this.b;
    }
}

const value1 = new Values(10,20)
console.log('value object ==. ', value1.add())

const value2 = new Values(50,30)
console.log('value object ==. ', value2.add())