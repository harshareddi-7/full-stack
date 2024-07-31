// how to check whether object is empty or not

let user={

}
let emp={
    id:101,
    name:'rahul'
}
/* console.log(emp.id);
console.log(emp.length); 
console.log(emp.loc);
// 
// 
console.log(Object.keys(emp));
console.log(Object.keys(user));
// 
console.log(Object.keys(emp).length);
console.log(Object.keys(user).length);
// 
console.log(Object.keys(emp).length>0);
console.log(Object.keys(user).length>0); */
if (Object.keys(emp).length>0){
    console.log('not empty');
}else{
    console.log("empty obj");
}



// 
// 
let len1= Object.keys(user).length >0f