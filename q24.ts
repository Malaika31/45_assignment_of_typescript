let car="car";
console.log(car=="car");
console.log(car!="car")
//lowercase condition
let uppercasecar="CAR";
console.log(uppercasecar.toLowerCase()=="car");
console.log(uppercasecar.toLowerCase()!="car");
//numeral tests
let num1=4;
let num2=6
//equality and unequality
console.log(num1==4);
console.log(num1!=4);
//greater than and less than
console.log(num1<num2);
console.log(num1>num2);
//greater than or equals to and less than or equals to
console.log(num1<=num2);
console.log(num1>=num2);
//or and operator true condtions
console.log(num1<num2 && num2>=num1);
console.log(num2>num1 || num2==6);
//or and operator false condtions
console.log(num1>num2 && num2!=6);
console.log(num2==num1 || num1>=6);
//array test
let fruits:string[]=["apple","mango","banana"];
console.log(fruits.includes("mango")?"true":"false");
console.log(fruits.includes("orange")?"true":"false");