/*
Arithmatic operators 
+ (Addition)
- (substraction)
* (multiplication)
/ (division)
% (modulus)
** (exponential,power)
++ (increment)
-- (decrement)
*/
var x=10;
var y=5;
var add=x + y;
console.log('addition',add);
var sub=x-y;
y=7;
console.log('subtraction',sub);
var multi=x*y;
console.log('multiplication',multi);
x=50;
var div=x/y;
console.log('division',div);
var modu=x%y;
console.log('modulus',modu);
y=2;
var exp=x**y;
console.log('exponent',exp);
var inc=5;
inc++;
console.log('increment',inc);
var dec=5;
dec--;
console.log('decrement',dec);

/* 
Comparision operators
== (equal operator)
!= (not equal)
=== (strict equal operator)
!== (strict not equal operator)
> (greater than)
< (less than)
>= (greater than equal)
<= (less than equal)
*/
console.log("using comparision operaator")
var a=1;
var b=2;
var c=1;
var d='1';
console.log("equal operator")
console.log(`a == b ${a} == ${b}`,a == b)
console.log(`a == c ${a} == ${c}`,a == c)
console.log(`a == d ${a} == ${d}`,a == d)
console.log("not equal operator")
console.log(`a != b ${a} != ${b}`,a != b)
console.log(`a != c ${a} != ${c}`,a != c)
console.log(`a != d ${a} != ${d}`,a != d)
console.log("strict equal operator")
console.log(`a === b ${a} === ${b}`,a === b)
console.log(`a === c ${a} === ${c}`,a === c)
console.log(`a === d ${a} === ${d}`,a === d)
console.log("strict notequal operator")
console.log(`a !== b ${a} !== ${b}`,a !== b)
console.log(`a !== c ${a} !== ${c}`,a !== c)
console.log(`a !== d ${a} !== ${d}`,a !== d)
console.log("greaterthan operator")
console.log(`a > b ${a} > ${b}`,a > b)
console.log(`a > c ${a} > ${c}`,a > c)
console.log(`a > d ${a} > ${d}`,a > d)
console.log("lessthan operator")
console.log(`a < b ${a} < ${b}`,a < b)
console.log(`a < c ${a} < ${c}`,a < c)
console.log(`a < d ${a} < ${d}`,a < d)
console.log("greaterthan equal to operator")
console.log(`a >= b ${a} >= ${b}`,a >= b)
console.log(`a >= c ${a} >= ${c}`,a >= c)
console.log(`a >= d ${a} >= ${d}`,a >= d)
console.log("lessthan equal to operator")
console.log(`a <= b ${a} <= ${b}`,a <= b)
console.log(`a <= c ${a} <= ${c}`,a <= c)
console.log(`a <= d ${a} <= ${d}`,a <= d)
//logical operator
/*
AND operator( && )
OR operator( || )
NOT operator( ! )
*/
console.log("Uses of Logical operator")
console.log("true AND true:",true && true);
console.log("true AND false:",true && false);
console.log("false AND true:",false && true);
console.log("false AND false:",false && false);
console.log("true OR true:",true || true);
console.log("true OR false:",true || false);
console.log("false OR true:",false || true);
console.log("false OR false:",false || false);
console.log("NOT true", !true);
console.log("NOT false", !false);
/*
Assignment Operators
=
+=
-=
*=
/=
%=

*/
console.log("using += Assignment operator")
var res=20;
res +=5;
console.log("res +=5:",res)
console.log("using -= Assignment operator")
var res=20;
res -=5;
console.log("res -=5:",res)
console.log("using *= Assignment operator")
var res=20;
res *=5;
console.log("res *=5:",res)
console.log("using /= Assignmnet operator")
var res=20;
res /=5;
console.log("res /=5:",res)
console.log("using %= Asssignmnet operator")
var res=20;
res %=5;
console.log("res %=5:",res)
/*
Conditional operator:also called as ternary operator

 */
console.log("example of conditional operator")
var x=20;
var y;
(x>10)? y="true" : y= "false";
console.log(y);

var x=5;
var y=5>4 ? x+=5 : false;
console.log(y)

console.log("example even or odd")
var x=22;
var y=(x%2==0) ? 'even number' : 'odd number';
console.log(y)