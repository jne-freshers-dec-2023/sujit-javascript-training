var a = '15';
var b = 7;

function checkWithOperator1(){
    console.log('fuction 1')
    console.log('after + value ====> ', -a)
    console.log('type of a variable ====> ', typeof(-a))
}
checkWithOperator1();

function checkWithOperator2(){
    console.log('fuction 2')
    console.log('after + value ====> ', +a)
    console.log('type of a variable ====> ', typeof(+a))
}
checkWithOperator2();

function checkWithOperator3(){
    console.log('fuction 3')
    console.log('after + value ====> ', ++a)
}
checkWithOperator3();

function checkWithOperator4(){
    console.log('fuction 4')
    console.log('after + value ====> ', --a)
}
checkWithOperator4();

function checkWithOperator5(){
    console.log('fuction 5')
    console.log('after + value ====> ', a++)
}
checkWithOperator5();

function checkWithOperator6(){
    console.log('fuction 6')
    console.log('after + value ====> ', a--)
    console.log('value of a at last ====> ', a)
}
checkWithOperator6();