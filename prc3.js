/**
 * Created by Sindhu on 6/27/16.
 */
/* For
Break -  to exit a loop
continue - to go to next iteration of loop
For in loop -  it lets in look detailed for properties of an object

 */


/*var lineItemCount = 3;
for (var i=0; i<lineItemCount; i++)
console.log(i);*/

/*var lineItemCount = 3;
var i=0;
for (; i<lineItemCount; i++)
console.log(i);*/

/*var lineItemCount = 5;
for (var i =0; i<lineItemCount; i++){
    console.log(i);
    if(i==3)
        break;
}
var lineItemCount = 5;
for (var i =0; i<lineItemCount; i++) {
    if(i==1)
        continue;

    console.log(i);
}*/

/*var lineItemCOunt = 5;

outerLoop: //nested loops
for(var i=0 ; i<lineItemCOunt; i++){
    for (var j=0 ; j<3; j++){
        if (j==1)
            continue outerLoop; //nothing is outputted
    }
    console.log(i);
}*/



/*var lineItem ={
        product:'Widget 1',
        quantity:4,
        price:9.50
}; // Jason notation

//calling using for in loop


for (var field in lineItem)
    console.log(field);

var lineItem ={
        product:'Widget 1',
        quantity:4,
        price:9.50
}; // Jason notation

//calling using for in loop


for (var field in lineItem)
    console.log(field +":" + lineItem[field]);*/

// JS feature
//Case Sensitivity
//Comments
//Identifiers

/*var total = price*quantity; //undefined * undefined is NAN
var price = 3.00;
var quantity = 5;

console.log(total);*/



/*var showProduct = function() {
    console.log("Showing product");
    
}
showProduct();*/


/*console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*2);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE*2);
var n=Infinity;
console.log(n);
var n=-Infinity;
console.log(n);
*/

/*var productType='Hardware';

console.log(productType.toLowerCase());
console.log(productType.toUpperCase());
console.log('[' +productType +']');*/


//boolean Values -  true/false


/*var ifSpecial=true;
if(ifSpecial)
    console.log('is true');




console.log(Boolean ("hello"));
console.log(Boolean (""));
console.log(Boolean (" "));
console.log(Boolean (6));
console.log(Boolean (undefined));
console.log(Boolean (null));
console.log(Boolean ());




var n=99.90;
console.log(typeof !n);
console.log(typeof !!n);


var m="novalue";
console.log((!!m));*/

/*var star = null;
console.log(typeof star); // type of null i sobject*/
// undefine is a value and has a data type
//null is an empty value and is an object

/*console.log(undefined==null); // ==  result is true : undefined and null are equal but types are different
console.log(undefined===null); // === result is false: both are not equal in data types*/
/*'strict';
var productId='PRD-200';
console.log(productId);
console.log(window.productId); //global object is same
console.log(this.productId); //global object is same

console.log((this ===window))




var description = 'hardware product';
function updateProduct() {
   description='updated product';//global mode

}
updateProduct();
console.log(description);

var description = 'hardware product';
function updateProduct() {
  var description='updated product';//function mode

}
updateProduct();
console.log(description)*/


/*function updateProduct() {
    var description='original product';
    var updateProductId = function(){
        console.log(description);
    }
    updateProductId();


}
updateProduct();



function updateProduct() {
    var description='original product';
    var updateProductId = function(){
        console.log(description);
    }
    updateProductId();


}
updateProduct();


try{
    throw 123;
}
catch (e){
    //console.log(e); 
}




















































