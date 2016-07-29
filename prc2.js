/**
 * Created by Sindhu on 6/21/16.
 */

/*var a = "5";
var isactive;
console.log(typeof isactive)*/

    /*var b=5;*/

/*console.log(typeof a);*/
/*console.log(typeof a);

var order = {

    orderId:200,
    value:"300",
    isactive:true
}

console.log(typeof order);
var order=[200,300,400];
console.log(typeof order);

var order=null;
console.log(typeof order);*/

/* Functions : Declaring functions , Arguments, getting return values, diff btn
function declaration
* and function expression
function order(star) {

}
console.log(typeof order);
function printOrder()
//declaring a function called print order and it is global function
{
    console.log('printorder')

};
printOrder();

function printOrder(orderId) {
    console.log('printing order:'+orderId)

}
printOrder('200');

It will see print order before it executes

printOrder('200');//global variable -  2 passes( 1- global variable 2- execution//
function printOrder(orderId) {
    console.log('printing:'+orderId)

}

function calTotalprice(quantity , price) {
    return quantity*price;
    
}

var totalPrice = calTotalprice(2,4.00);
console.log(totalPrice);
totalPrice = calTotalprice(7,4.00);
console.log(totalPrice);



function getOrder() {
    //nothing returned

};
var order=getOrder();
console.log(order);

var activateOrder=function () {  //functionexpression
    console.log('Order activated');

}
console.log( typeof activateOrder);

var activateOrder=function () {
    console.log('Order activated');

}
activateOrder();

var activateOrder=function () {
    console.log('Order activated');

};
activateOrder;*/
//paranthesis missing - simply reference to variable so returns nothing.*/

/*If
If..else
Switch case
advanced cases


var total =99.99;
var freeShipping= false;
if (total>=50)
    freeShipping=true;

console.log(freeShipping);
var total =99.99;

var freeShipping= false;
if (total>=100.00)
    freeShipping=true;

console.log(freeShipping);


var total =99.99;

var freeShipping;
if (total>=100.00)
    freeShipping=true;
else
    freeShipping=false;

console.log(freeShipping);


var total=99.99;
var freeShipping;
var savings;

if (total>=100.00){
    freeShipping=true;
    savings=29.99

}

else{
    freeShipping=false;
    savings=0;

}

console.log(savings);*/


/*var orderType='business';
var shipping;

if (orderType == 'business')
    shipping = 'fedex';
else if (orderType =='personnel')
    shipping = 'ups';
else
   shipping ='USPS';

console.log(shipping);

switch (orderType){
    case 'business': shipping = 'fedEx'; break; // if there is no break then the result in console is UPS - this is a bug
    case 'personnel': shipping= 'UPS'; break;
    default: shipping = 'USPS';

}
console.log(shipping);

var orderType= 'unknown';
var shipping;

/*switch (orderType){

    case 'business':
    case  'personnel':
        shipping = 'UPS'; break;
    default :
        shipping = 'USPS'; // As the order type is unknown the default switch case is picked.

}
console.log(shipping);

switch (orderType){

    case 'business':
    case  'personnel':
        shipping = 'UPS'; break;
//as there is no default switch statement, the result is undefined.
}
console.log(shipping);



/*var orderTotal=99.99;
var discount;

switch (true){

    case orderTotal >=50 && orderTotal<75: discount=10; break;
    case orderTotal >=75 && orderTotal<100: discount=20; break;
    case orderTotal >=100 : discount=30; break;
    default: discount = 0;
}

console.log(discount);
/*
var lineItemCount=4;
var currentItem=undefined;*/

//while(currentItem<lineItemCount){
   // console.log("item:" +currentItem);
    //currentItem++;

//while(currentItem<lineItemCount){
 //   console.log("item:" +currentItem++);


//while(currentItem<lineItemCount){
//
//
//   console.log("item:" +currentItem);


/*do{
    console.log("Item:" +currentItem);
    currentItem++;

}while (currentItem<lineItemCount);*/



























