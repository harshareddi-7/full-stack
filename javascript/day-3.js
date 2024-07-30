/* let a='45';
let b='33';
console.log(a+b);
let a= 45;
let b= 69;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// 
let c = 'y';
console.log(a+c);
console.log(a*c);
console.log(a-c);
console.log(a/c);
console.log(a%c);
console.log(a**c);
 */
// ----------------------------------------

let a=6;
let b=9;
// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);



// ----------------------------------------------
//  console.log(a==b);
//  console.log(a!=b);
//  console.log(a===b);
//  console.log(a!==b);

// ---------------------------------------------

// console.log(a>5 && b<5);
// console.log(a>5 || b<5);
// console.log(a>5 && b>5);
// console.log(a>5 || b>5);
// console.log(a<5 && b<5);
// console.log(a<5 || b<5);
// console.log(a<5 && b>5);
// console.log(a<5 || b>5);
// console.log(a=b);

const hour = new Date().getHours(); 
let greeting;

if (hour >=0o0 && hour <=11.59) {
  greeting = "Good morning";
} else if(hour>=12 && hour <=15) {
greeting= "good afternoon";
}else if(hour >=15 && hour <=18){
  greeting = "Good evening";
}else{
greeting ="godd night";
}

console.log(greeting);
