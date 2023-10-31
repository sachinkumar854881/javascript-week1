//global scope 
console.log("using of global scope")
var a="hello sachin";
function globscope(){
    console.log(a);//access inside the function
}
globscope();
console.log(a);//also access outside the function

//declare multiple variable in single statement
var a=12,b=14,c=16;
function hellojs(){
    console.log(a,b,c);
}
hellojs();

//function scope
console.log("using of function scope")
function funscope(){
    let a=100;
    console.log(a);
}
funscope();

//block scope
console.log("using block scope")
const x=22;
{
    const x=90;
    console.log(x);
    {
        const x=70;
        console.log(x);
    }
    {
        const x=50;
        console.log(x);
    }
}
console.log(x);