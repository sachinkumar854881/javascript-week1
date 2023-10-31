console.log("this is primitive")
console.log("using Boolean")
var bool_true=true;
var bool_false=false;
console.log("boolean",bool_true)
console.log("boolean",bool_false)
console.log("bool_true",typeof(bool_true))
console.log("bool_false",typeof(bool_false))

console.log("using Number")
var x=10;
console.log(`x=${x}`)
console.log(`type of value=${typeof(x)}`)

console.log("using Null")
var x=null;
console.log(`x=${x}`)
console.log(`type of value=${typeof(x)}`)

console.log("using Undefined")
var x=undefined;
console.log(`x=${x}`)
console.log(`type of value=${typeof(x)}`)

console.log("using String")
var str1='hello Sachin';
console.log(`str1=${str1}`)
console.log(`type of value=${typeof(str1)}`)
var str2="hello Happy";
console.log(`str2=${str2}`)
console.log(`type of value=${typeof(str2)}`)

console.log("using Symbol")
var sym1=Symbol();
var sym2=Symbol('sachin');
var sym3=Symbol();
console.log(`sym1`,sym1)
console.log(`sym2`,sym2)
console.log(`type of value in sym1=${typeof(sym1)}`)
console.log(`type of value in sym2=${typeof(sym2)}`)

console.log("this is Non-Primitive")
console.log("using Object")
var x={
    key:10,
    name:'sachin',
    age:26,
    graduate:true,
}
console.log('x',x)
console.log(`type of value=${typeof(x)}`)

console.log("using Array")
var arr=[2,4,'name','age',true];
console.log('arr',arr)
console.log(`type of value=${typeof(arr)}`)
console.log('arr=',typeof(arr))

console.log("how update in array")
var arr=[2,4,'name','age',true]
console.log('arr=',arr)
console.log('arr',typeof(arr))
arr[1]=10;//update in array
console.log('after updating arry',arr)
