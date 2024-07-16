/* ------keywords used to define variabbles----------- and DATATYPES as well including the variables----------------
 We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed. */




/* 
// ---------------------------------------------------------------------
var product ={//defining variable using var keyword named product
    name: "Samsung Galaxy S10",//string type
    price: 1000,//number type
    color: "black",//string type
    isAvailable: true,//boolean type
    rating: 4.5,//number type
    price: 1200,

};
console.log(product);//print line
// to check datatype type 
console.log(typeof product);//print line
// to check datatype type
console.log(typeof product.name);//print line
console.log(typeof product.price);
console.log(typeof product.color);
console.log(typeof product.isAvailable);
console.log(typeof product.rating);
-------------------------------------------------------------------------------- */
/* 
// ---------------------------------------------------------------------
let product = {//defining variable using let keyword named product

    name: "Samsung Galaxy S10",//string type
    price: 1000,//number type
    color: "black",//string type
    isAvailable: true,//boolean type
    rating: 4.5,//number type
    price: 1200,//we can update variable value many times we want in the object in let keyword
};

console.log(product);//print line
// to check datatype type 
console.log(typeof product);//print line
// to check datatype type
console.log(typeof product.name);//print line
console.log(typeof product.price);
console.log(typeof product.color);
console.log(typeof product.isAvailable);
console.log(typeof product.rating);
// --------------------------------------------------------------------- */



/* // -------------------------------------------------------------------------
// const keyword
const product = {//defining variable using let keyword named product

    name: "Samsung Galaxy S10",//string type
    price: 1000,//number type
    color: "black",//string type
    isAvailable: true,//boolean type
    rating: 4.5,//number type
};

console.log(product);//print line
// to check datatype type 
console.log(typeof product);//print line
// to check datatype type
console.log(typeof product.name);//print line
console.log(typeof product.price);
console.log(typeof product.color);
console.log(typeof product.isAvailable);
console.log(typeof product.rating);

// ---------------------------------------------------------------------  */
/* 
// task /* 
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”). */
let admin ,name;
name= "john";
admin=name;
alert(admin);
