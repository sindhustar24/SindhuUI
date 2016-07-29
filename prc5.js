//common reference type

/* Objects
Arrays
dates
regular expressions
functions
primitive data types .. with wrapper
 */
/*
var ob1= {
    name:"ski ski"
};
var ob2 = ob1;
console.log(ob2.name);

var ob3= {
    name:"ski ski"
};
var ob4 = ob3;
ob3.name = "sss sss";
console.log(ob4.name);
console.log(ob3.name); //sss sss

var ob5= {
    name:"sososos"
};
function ob6(star){
    star.name = 'noname';
}
ob6(ob5); //functions can modify reference types
console.log(ob5.name);


var a1 = [1,2,3];
var a2 = a1;
a1[0] =11;
console.log(a2[0]); //11


var entries = new Array('trains', 'plains', 'Automobiles');
console.log(entries);
console.log(entries instanceof Array);

var entries = new Array('trains', '42', true); // array is loosely typed
console.log(entries);
console.log(entries instanceof Array);

var entries = new Array(5);
console.log(entries.length);

var entries = new Array("5");
console.log(entries.length);

var entries = [];
console.log(entries.length);

var entries = [,,,];
console.log(entries.length);

var entries = Array('trains','plains', 'automobiles');
console.log(entries);
console.log(entries instanceof Array);

var entries = ['trains','plains', 'automobiles'];
console.log(entries);
console.log(entries instanceof Array); // true
console.log(entries[0]);//trains
console.log(entries[2]);//automobiles
console.log(entries[3]); //undefined


var ar1=['s1','s2'];
ar1.length = 5;
console.log(ar1.length);

var ar1=['s1','s2'];
ar1.length = 1;
console.log(ar1[1]);

var ar1=['c1','c2','c3'];
ar1[5] ='c6';
console.log(ar1.length);
console.log(ar1[5]);

var ar1=['c1','c2','c3'];
ar1[ar1.length] = 'c5';
console.log(ar1.length);

var ar1=['c1','c2','c3'];
console.log(ar1.toString());

var ar1=['c1','c2','c3'];
console.log(ar1.valueOf());

var ar1=['c1','c2','c3'];
console.log(ar1.join('|'));
*/

var a = [];
a.push(4);
a.push(1,2);
console.log(a.length);//3


var a = [];
a.push(4);
a.push(1,2);
a.pop();
console.log(a.length); //2

var b=[];
b.push(2);
b.push(3,4);
var c = b.shift();
console.log(c);//[2,3,4] shift of array is [ 3,4] so c array has [2]
console.log(c.length);
console.log(b.length);


var d=[];
d.push(1);
d.push(2,3,4);
var e=d.unshift(5);
console.log(d[0]);
console.log(e);
console.log(e.length);


var f=[1,2,3,4];
f.reverse();
console.log(f);
var g=f.concat([5,6,7]);
var i=f.slice(3);
var j= f.slice(1,3);
console.log(j);
console.log(i.toString());
console.log(i);
console.log(i.length);

var h = g.concat([3,4],4,5,5);
console.log(g.length);
console.log(g);
console.log(f);
console.log(h);
h.sort();
console.log(h);


var k=new Date();
console.log(k);










