/**
 * Created by Sindhu on 7/1/16.
 */
//Objects , JSON -  Java script object notation ,
// prototypes -  gives objects some type of inheritance TO JS OBJECT from parent
//object.create()
//object.defineProperty()
//Miscellaneous functions

/*
var project = new Object();
project.name = 'Project UI';
console.log(project.name);

var project = new Object();
project.name = 'Project UI';
project.securityLevel = 12;
project.updateDueDate = function () {
    return true;
};
console.log(project.name);
console.log(project.updateDueDate());
console.log(project['securityLevel']);

var field = 'securityLevel';
console.log(project[field]);

//using JASON


var project={
    name:'Project UI',
    securityLevel:15,
    updateDueDate: function () {
        return true;
    },
    team:[ 'sindhu' , 'aadya', 'sam']
};
console.log(project.name);
console.log(project.team[2]);


console.log(project.toString()); // object without fields // to string is on prototype

console.log(typeof Object.prototype);
console.log(typeof Object.prototype.toString); //to String exista on object.prototype

*/
/*

var task= {};
//Object.defineProperty(task, 'text', {value:'get this job done'});
Object.defineProperty(task, 'text',{value: ' get this job done ', writable: true});
task.text = task.text + '...Now';
console.log(task.text);
*/


/*var hireEmployee = function (name) {
    throw('Error')
};
var action=hireEmployee;
console.log(typeof hireEmployee);
hireEmployee('JJ');
action('JJ');*/

/*
var hireEmployee = function  myHireEmployee(name) {
    throw ('Error');

};
var action = hireEmployee;
action('JJ');*/

/*

console.log(typeof Object);

var Employee = function(name){
    this.name = name;
};
var newEmployee = new Employee('JJ');
console.log(typeof newEmployee);
console.log( newEmployee.name);

var Employee = function (name,boss) {
    this.name = name;
    this.boss = boss;

};

var newEmployee = newEmployee('JJ', 'JJ H');
console.log(newEmployee.boss);
*/


var org ={
    name : 'A',subordinates:[
        {
            name: 'B', subordinates: [
            {name: 'C', subordinates: []},
            {name: 'D', subordinates: []}

        ]
        }
]
};

var fn = function org1(topEmployee) {
    console.log(topEmployee.name);
    for (var i =0; i< topEmployee.subordinates.length; i++)
    org1(topEmployee.subordinates[i]);
};
var org1 = fn;
fn = null;
org1(org);
    

