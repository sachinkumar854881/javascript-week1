//using while loop
console.log('using while loop')
var count=0;
while(count<5){
    console.log(`print count =${count}`);
    count++;
} 
// using do while
console.log('using do while loop')
var count=0;
do{
    count++;
    console.log(`print count= ${count}`);
}while(count<5)
//for loop 
console.log("using for loop")
for(var counter=0;counter<5;counter++){
    console.log(`counter is= ${counter}`);
}
//using for-of loop
console.log('for-of loop with string')
var name="sachin";
for(let char of name){
    console.log("my characters=" + char);
}
//using for-of loop
console.log('for-of loop with array')
const arritem=["amit","ved","sachin"];
for(let item of arritem){
    console.log("my arr is=" + item);
}
//using for in loop 
console.log('for in loop')
const obj={a:1, b:2, c:3};
for(let key in obj){
    console.log(`keys are=${key}`);
}
console.log('for in loop')
const arr=["cat",10,20,30,40,50];
for(let key in arr){
    console.log(`index are=${key}`);
}