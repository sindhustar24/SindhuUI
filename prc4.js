/**
 * Created by Sindhu on 6/29/16.
 */
/* Operators
Unary
bitwise
boolean
equality
relational */


/*var total = 5+3;
console.log(total);
var total = 5.1+3.3;
console.log(total);
var total = 5.1+3.3;
console.log(total.toFixed(2)); // in order to rounnd it
var id="prd"+"X99";
console.log(id);

var id="prd" +2000;
console.log(id)
var id=2000 + "prd" ;
console.log(id);

var id="200"+500;
console.log(id);

var id = 2000+undefined;
console.log(id);

var id = "prd" + undefined;
console.log(id);
var id = 2000+null;
console.log(id);
var id = "PRD"+null;
console.log(id);
var id = 2000+NaN;
console.log(id);
var id = "PRD"+NaN;
console.log(id);

var total = 30-20;
console.log(total);
//subtraction
var total = 3.8-2.1;
console.log(total);
var total = 3.8-2.1;
console.log(total.toFixed(3));
var total= "300" - "200";
console.log(total);

var total = "PAD40"-"ITM30";
console.log(total);

var total = 30-undefined;
console.log(total);
var total = 30-null;
console.log(total);


var total = 30-NaN;
console.log(total);
var total = 30-"";
console.log(total);

//Multiplication divison Modulus

var total = 9*3;
console.log(total);
var total = 3.0*2.1;
console.log(total.toFixed(2));

var total = 1.1*1.1;
console.log(total);
var total = 1.1*NaN; //NaN
console.log(total);


var total = 1.1* null; //0
console.log(total);

var obj= {
    valueOf: function () {
        return 100;

    }
};
var total = 4*obj;
console.log(total); // 400

var total = 4 * Infinity;
console.log(total); //infinity

var total = -4 * Infinity;
console.log(total); //-infinity

var total = 4 * "sis";
console.log(total); //NaN


var total = 4/0;
console.log(total); //infinity

var total = -4 /0;
console.log(total); //-infinity

var total = 9/"3";
console.log(total); //3

var total = 9%4;
console.log(total); //1

var total = 9%" 4 "; // JS gets rids of whitespace in string
console.log(total); //1*/

//Arrays and reference types

/*var level=5;
++level;
console.log(level);//6
var level=5;
level++;
console.log(level);//6

var level=5;
var nextLevel = ++level;
console.log(nextLevel);//6

var level=5;
var nextLevel = level++;
console.log(nextLevel);//5

var level=5;
var nextLevel = --level;
console.log(nextLevel); //4

var level=5;
var base=10;
var nextLevel = level--*base;
console.log(nextLevel); //50


var level=5;
var base=10;
var nextLevel = --level*base;
console.log(nextLevel);//40

var level;
console.log(++level);//NaN


var level=null;;
console.log(++level); //1

var level = 9;
level = +level;
console.log(level); //9

var level = -9;
level = +level;
console.log(level);//-9

var level = 'calc';
level = +level;
console.log(level); //NaN


var level = 'calc';
level = -level;
console.log(level); //NaN

var level = 42;
level = -level;
console.log(level); //-42

var level = -42;
level = -level;
console.log(level);//42*/

//bitwise operators

/*var num1 = parseInt('1010',2);
var num2 = parseInt('0110',2);
var total = num1&num2;
console.log(total.toString(2));//10

var num1 = parseInt('1010',2);
var num2 = parseInt('0110',2);
var total = num1|num2;
console.log(total.toString(2));//1110

var num1 = parseInt('1010',2);
var num2 = parseInt('0110',2);
var total = num1^num2;
console.log(total.toString(2));//1100

var num1 = parseInt('0001',2);
num1 = num1 <<2;
console.log(num1.toString(2)); // 0100

var num1 = parseInt('1000',2);
num1 = num1 >>3;
console.log(num1.toString(2));//0001

var num1 = -parseInt('1000',2);
num1 = num1 >>3;
console.log(num1.toString(2));//-1

var num1 = -parseInt('1000',2);
num1 = num1 >>3;
console.log(num1.toString(2));


var num1 = parseInt('1000',2);
num1 = num1 >>>1;
console.log(num1.toString(2)); //100

var num1 = -parseInt('1000',2);
num1 = num1 >>>1;
console.log(num1.toString(2));//1111111111100*/

//Boolean operators

/*var value = !true;
console.log(value);//false

var value = !99;
console.log(value); //False // 99 evaluates to true so not true is False

var value = !0;
console.log(value); // true // 0 evaluates to false and not false is true

var value = !"";
console.log(value);// true

var value = !"A";
console.log(value);//false

var value = !" ";
console.log(value); // false

var value = !new Object();
console.log(value); // false

var value = !null;
console.log(value);//true

var value = !undefined;
console.log(value);//true

var value = !NaN;
console.log(value);//true

var value = !!false;
console.log(value); //False

var value = true&&true;
console.log(value); //true

var value = false&&true;
console.log(value); // false

var value = false&&false;
console.log(value);// false

var obj={ calc: 'Logical AND'};
var value = obj &&99;
console.log(value);// 99 - object && number is number  ( arbitary rule)

var obj={ calc: 'Logical AND'};
var value = obj &&obj;
console.log(value); // object {calc: 'Logical AND'}
var obj={ calc: 'Logical AND'};
var value = true&&obj;
console.log(value); //object

var val =null && 99;
console.log(value);//null

var val =undefined && "Z";
console.log(value);//null

var val =null && 'sis';
console.log(value);//null

var val =undefined && 'sis';
console.log(value);//undefined

var val =null && 'sis';
console.log(value);//null

var val =null && 'sis';
console.log(value);//null

var val =null && 'sis';
console.log(value);//null

var value = false&&productId;
console.log(value);

var productIp=5;
var value = false && ++productIp;
console.log(productIp);

var value = true||true;
console.log(value);
var value = true||false;
console.log(value);
var value = false||false;
console.log(value);

var value = false||true;
console.log(value);


var obj ={
    calc:'logical OR'
};
var value=obj ||99;
console.log(value); //if 1 st value is an oject then object is returned

/*var defaultSettings = {
    who:'default'
};
var userSettings = {
    who:'user'
};

var value = userSettings||defaultSettings;
console.log(value);*/

/*var defaultSettings = {
    who:'default'
};
var userSettings

var value = userSettings||defaultSettings;
console.log(value);*/


//Equality operator == !== === !===

/*if (true == 1 )
    console.log('true');
else
    console.log('false'); // true


if (true == 2 )
    console.log('true');
else
    console.log('false');//false



if (false == 0 )
    console.log('true');
else
    console.log('false');

if (42 == '42') // string is parsed  - converted to number
    console.log('true');
else
    console.log('false');


var obj = {
    valueOf: function () { return 42;} //object returns 42 (value of function )

    }
if (42 ==obj)
    console.log('true');
else
    console.log('false');


var obj = {
    toString: function () { return 42;} //object returns 42 (value of function )

}
if (42 ==obj)
    console.log('true');
else
    console.log('false');*/

//relational

if (55<60)
    console.log('true');
else
    console.log('false');//true
if (55>=55)
    console.log('true');
else
    console.log('false');//true

if ("alpha"<"beta")
    console.log('true');//true
else
    console.log('false');

if ("beta"<"Alpha")
    console.log('true');
else
    console.log('false');

if ('42'<60)
    console.log('true');
else
    console.log('false');

if ('42'< '63')
    console.log('true');
else
    console.log('false');

//compound assignment

var total = 6;
total += 4; // total =total+4
console.log(total);

var total =6;
total -=4; //total = total -4
console.log(total);

var total =2;
total <<=2;//1*2*2 = 4
console.log(total);

var total =8;
total >>=1;
console.log(total);// totol shifted to right  4/2 =2


//precedence operator

var total =2;
total *=4+3; //42

//comma operator

















































