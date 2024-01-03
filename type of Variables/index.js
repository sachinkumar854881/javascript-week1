console.log("this is primitive")
// Boolean
console.log("using Boolean")
var bool_true=true;
var bool_false=false;
console.log("boolean",bool_true)
console.log("boolean",bool_false)
console.log("bool_true",typeof(bool_true))
console.log("bool_false",typeof(bool_false))
// Number
console.log("using Number")
var x=10;
console.log(`x=${x}`)
console.log(`type of value=${typeof(x)}`)
// Null
console.log("using Null")
var x=null;
console.log(`x=${x}`)
console.log(`type of value=${typeof(x)}`)
// undefined
console.log("using Undefined")
var x=undefined;
console.log(`x=${x}`)
console.log(`type of value=${typeof(x)}`)
// String
console.log("using String")
var str1='hello Sachin';
console.log(`str1=${str1}`)
console.log(`type of value=${typeof(str1)}`)
var str2="hello Happy";
console.log(`str2=${str2}`)
console.log(`type of value=${typeof(str2)}`)
// Symbol
console.log("using Symbol")
var sym1=Symbol();
var sym2=Symbol('sachin');
var sym3=Symbol();
console.log(`sym1`,sym1)
console.log(`sym2`,sym2)
console.log(`type of value in sym1=${typeof(sym1)}`)
console.log(`type of value in sym2=${typeof(sym2)}`)
// Non-Primitive
console.log("this is Non-Primitive")
// Object
console.log("using Object")
var x={
    key:10,
    name:'sachin',
    age:26,
    graduate:true,
}
console.log('x',x)
console.log(`type of value=${typeof(x)}`)
// Array
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

/*
Types of variables in javascript(Primitive & Non-Primitive)
Primitive(immutables--Boolean,Numbers,Null,Undefined,String,Symbol)
Non-Ptimitive(mutable--Objects,Array & Function)
*/
// Boolean varibale
var boolean_value1 = true
var boolean_value2 = false
var boolean_new = new Boolean(true)
console.log("Boolean_value1=",boolean_value1)
console.log("Boolean_value2=",boolean_value2)
console.log("Boolean_new=",boolean_new)
console.log("type of Boolean_new =",typeof(boolean_new))
console.log("type of boolean_value1 =",typeof(boolean_value1))
// Number varibale
var number_value1 = 10
var number_value2 = -1
var number_new = new Number(true)
console.log("number_value1=",number_value1)
console.log("number_value2=",number_value2)
console.log("number_new=",number_new)
console.log("type of number_value1 =",typeof(number_value1))
console.log("type of number_new =",typeof(number_new))

// Undefined varibale
var n1;
var n2 = undefined
console.log("n1=",n1)
console.log("n2=",n2)
console.log("type of n1 =",typeof(n1))
console.log("type of n2 =",typeof(n2))

// null varibale
var n3;
n3 = null
console.log("n3 =",n3)
console.log("type of n3 =",typeof(n3))

// String variable
var string_value1 = "hello Sachin"
var string_value2 = 'hello sandeep'
var string_value3 = 'hello ved'
console.log("string_value1=",string_value1)
console.log("string_value2=",string_value2)
console.log("string_value3=",string_value3)
console.log(`string_value3--->${string_value3}`)
console.log("type of string_value3 =",typeof(string_value3))

// { } in non-primitive 
var data = {}
console.log("data is=",data)
console.log("type of data =",typeof(data))
var emp = {
    firstName : 'Sachin',
    lastName : 'Kumar'
}
emp.firstName = 'sandeep';//how add & update values
emp.age = 20
emp['address'] = 'faridabad'
console.log("emp =",emp)
var key='firstName'
console.log("emp.firstName",emp.firstName)
console.log("emp[`first`]",emp[`firstName`])
console.log("emp[key]",emp[key])


// Array 
var arr = [2,4,'name','age',true]
console.log("arr is ",arr)
console.log("type of arr is =",typeof(arr))
console.log(arr.length)
console.log(arr[3])
console.log(arr[arr.length-3])
arr[2] = 'fname'
console.log(arr)
console.log(arr.indexOf('fname'))
console.log(arr.indexOf('age'))
console.log(arr.indexOf(true))
console.log(arr.includes('fname'))

var arr1 = new Array(1,2,'sachin')
console.log("arr1 is ",arr1) 

// implicit type conversion & type coersion
// explicit type conversion
console.log("implicit type conversion",1+'1',typeof(1+' 1'))//string
console.log('null==null',null=='null')
// toString()
var val_to_convert = 10
console.log("val_to_convert",val_to_convert)
console.log("val_to_string",typeof(val_to_convert))
console.log("val_to_convert:",val_to_convert.toString())
console.log("val_to_convert:",typeof(val_to_convert.toString()))
// convert number into string & string into number
var str_val = new String(10)
console.log('str_val:',str_val)
console.log('str_val:',str_val.valueOf())

var convertedval = new Number(str_val)
console.log("converedvalue:",convertedval)
console.log("convertedval:",convertedval.valueOf())

// convert Boolean into string & Boolean into number
console.log("converted Boolean into String & number")
var bool_str = new String(true)
console.log("bool_str:",bool_str)
console.log("bool_str:",bool_str.valueOf())

var conv_bool_str = new Number(true)
console.log("conv_bool_str:",conv_bool_str)
console.log("conv_bool_str:",conv_bool_str.valueOf())

// converted Null into string,number,Boolean
console.log("converted null into String,number & boolean")
var null_str = new String(null)
console.log("null_str",null_str)
console.log("convert null into String:",null_str.valueOf())
 
var null_num = new Number(null)
console.log("null_num",null_num)
console.log("convert null into number:",null_num.valueOf())

var null_bool = new Boolean(null)
console.log("null_bool is ",null_bool)
console.log("converted null into boolean:",null_bool.valueOf())

// converted Undefined into string,number,Boolean
console.log("converted undefined into String,number & boolean")
var undef_str = new String(undefined)
console.log("undef_str",undef_str)
console.log("convert undefined into String:",undef_str.valueOf())
 
var undef_num = new Number(undefined)
console.log("undef_num",undef_num)
console.log("convert undefined into number:",undef_num.valueOf())

var undef_bool = new Boolean(undefined)
console.log("undef_bool is ",undef_bool)
console.log("converted undef into boolean:",undef_bool.valueOf())
// convert string into parseInt & parseFloat
console.log("converted String using parseInt & parseFloat")
var intdata = '300';
console.log(intdata,"is a",typeof(intdata));
intdata = parseInt(intdata);
console.log(intdata)
console.log(intdata,'type of',typeof(intdata))

let floatdata = '300.5'
console.log(floatdata,'type of',typeof(floatdata))
floatdata = parseFloat(floatdata)
console.log(floatdata)
console.log(floatdata,'type of',typeof(floatdata))