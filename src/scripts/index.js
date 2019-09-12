//JavaScript Fundamentals
//https://app.pluralsight.com/library/courses/javascript-fundamentals/table-of-contents 
//import '../styles/index.scss';
//console.log('webpack starterkit by Xiaohong');

//*Rest Parameters
// function sendCars(day, ...carIds){
// 	carIds.forEach(id => console.log(id));
// }
// sendCars('Monday', 100,200,300);

// function sendCars(...carIds){
// 	carIds.forEach(id => console.log(id));
// }
// sendCars('Monday', 100,200,300);

// function sendCars(...carIds,day){
// 	carIds.forEach(id => console.log(id));
// }
// sendCars('Monday', 100,200,300);
//error

//*Destruturing Array
// let carIds = [100, 200, 300];
// let car1, car2, theRest;
// [,car2,...theRest]=carIds;
// console.log(car1,car2,theRest);

//*Destructuring Objects
// let car = {id:5000, style:'convertible'};
// let {id,style}=car;
// console.log(id,style);

// 
//*Spread (opposite the Rest)
// function startCars(car1,car2,car3){
//     console.log(car1,car2,car3);
// }
// let carIds = [1,2,3];
// startCars(...carIds);

//you can use Rest and Spread at the same time
// function startCars(car1,car2,car3, ...rest){
//     console.log(rest);
// }
// let carIds = [1,2,3,4,5,6];
// startCars(...carIds);

//*TYPE CONVERSION
//console.log((889).toString());
//console.log(typeof((889).toString()));
//console.log(Number.parseInt('55abc78'));
//console.log(Number.parseFloat('58.89'));
//console.log(typeof(Number.parseFloat('58.89')));

//*Controlling Loops
//break;
//continue;

//*Operators 
//if(var1 == var2) {} //do type conversion
//if(var1 === var2) {} //do not do type conversion

//*Functions and Scope -use 'let' keywork, we have block scope
// var message = "starting...";
// if(5===5){
//     var message = "equel...";
//     console.log(message);
// }
// console.log(message);

// 
//##IIFE's - Immediately Self Invoke Function Expression
// let app = (function(){
//     let carId = 123;
//     console.log('in function');
//     return {};
// })();
// console.log(app);

//##use Closure with IIFE's - function example
// let app = (function() {
//     let carId = 123;
//     let getId = function() {
//         return carId;
//     };    
//     return {
//         getTheId:getId
//     };
// })();
// console.log(app.getTheId());

//##this Keyword - block example
// let o = {
//     carId: 456,
//     getId: function() {
//         console.log(this);
//         return this.carId;
//     }
// };
// console.log(o.getId());

//##call and apply - change function context (this)
    //call existing function without copy
//##bind is also have things to do with (this)
    //call and make a copy of the function

//## Arrow functions - shorthand => syntax and lexical (this) keyword
//A modern concise way to function
//ex1: no parameter 
//  let getId = () => 123;
//  console.log(getId);

//ex2: one parameter
//  let getId = prefix => prefix + 123;
//  console.log(getId('ID: '));

//ex3: two or more paramenters
//    let getId = (prefix, suffix) => {
//        return prefix + 123 + suffix;
//    };
//   console.log(getId('ID: ', '!'));

//ex4: no need 'return'
//let getId = (prefix, suffix) => prefix + 123 + suffix;
//console.log(getId('ID: ', '!'));

//conclusion - Arrow functions do not have their own 'this' value. 
//'this' refers to the enclosing context

//##Default Parameters - with back tick
// let trackCar = function(carId, city='NYC'){
//     console.log(`Tracking ${carId} in ${city}.`);
// };
// console.log(trackCar(123));
// console.log(trackCar(123, 'Chicago'));

//OBJECTS AND ARRAYS
//*Construction function - using 'this' keyword
//ex1: 
// function Car(){
//     console.log(this);
// }
// Car(); //- goes to window object
// let vehicle = new Car();

//ex2:
// function Car(id){
//     this.carId = id;
//     this.start = function(){
//         console.log('start: ' + this.carId);           
//     };
// }
// let vehicle = new Car(123);
// vehicle.start();

//*Prototypes basic
// function Car(id){
//     this.carId = id;
// }
// Car.prototype.start = function(){
//     console.log('start: ' + this.carId); 
// };
// let car = new Car(123);
// car.start();

//*Expanding Objects Using Prototypes 
// String.prototype.hello = function(){
//     return this.toString() + ' Hello';
// };
// console.log('foo' .hello());

//*JSON - JavaScript Object Notation
//## simple js code and JSON
// let car = {
//     id: 123,
//     style: 'convertible'
// };
// console.log(JSON.stringify(car));

//## Parsing JSON
// let jsonIn = 
// `
// [
//     {"carId" : 123},
//     {"carId" : 456},
//     {"carId" : 789}
// ]
// `;
// let carIds = JSON.parse(jsonIn);
// console.log(carIds);
// console.log(JSON.stringify(carIds));

//*Array Iteration
// let carIds = [
//     {carId:123, style:'sedan'},
//     {carId:456, style:'convertible'},
//     {carId:789, style:'sedan'}
// ];
// carIds.forEach(car => console.log(car));
// carIds.forEach(
//     (car,index) => console.log(car, index)
// );

// let convertible = carIds.filter(
//     car => car.style === 'convertible'
// );
// console.log(convertible);

// let result = carIds.every(
//     car => car.carId > 0
// );
// console.log(result);    //true

// let car = carIds.find(
//     car => car.carId > 500
// );
// console.log(car);

//CLASSES AND MODULES
//*Basic
// class Car {
//     constructor(id){
//         this.id=id; // 'this' keyword only reside inside of construtor
//     }
//     myidentify(suffix){   //no need 'function' keyword inside of constructor
//         return `Car Id: ${this.id} ${suffix}`;
//     }
// }
// let car = new Car(123);
// console.log(car.myidentify('!!!'));

//Inheritance
// class Vehicle{  //super class
//     constructor(){
//         this.type='car';
//     }
//     start(){
//         return `Starting: ${this.type}`;
//     }
// }

//ex1
// class Car extends Vehicle {
//     constructor(){
//         super();    //it neccessay if derived class has constructor
//     }
// }
// let car = new Car();
// console.log(car.type);

//ex2
// class Car extends Vehicle {
//     start(){
//         return 'in Car start ' + super.start();
//     }
// }
// let car = new Car();
// console.log(car.start());

//* Creating a Module with classes by creating folders and js files
//(we are using webpack...)
// import {Car} from './models/car';
//  let car = new Car(123);
//  console.log(car.id);

//PROGRAMMING THE BOM AND DOM
//*window Object - global, but you have declair specifically (var, let etc.) when you work with modules
//Properties        Methods     Events
//document          alert()    (not common) 
//location          back()
//console           confirm()
//innerHeight
//innerWidth
//pageXOffset
//pageYOffset

//*timer
//setTimeOut();...

//*location
//properties        Methods     Events
//href              assign()    (not common)
//hostname          reload()
//port
//pathname
//search
//ex: console.log(location.href);

//*The document Object
//Properties        Methods             Events
//body              createElement()     onload
//forms             createEvent()       onlick
//links             getElementById()    onkeypress
//                  getElementByClassName()
//...handreds of them
//ex: document.getElementById();-- single el
//ex: document.getElementByClassName(); --html collection

//modifying DOM Elements
// let element = document.getElementById('elementId');
// element.textContent = 'new text here';
// element.setAttribute('name', 'nameValues');
// element.classList.add('myClassName');
// element.style.color = '#0000ff';

//PROMISES AND ERROR - Async feature
//*Creating a Promise - Promise is in the js since ECMA2015(ES6). 
//Before that, in order to use Promise, you have to use third party library such as Q

// let promise = new Promise(
//     function(resolve, reject){
//         setTimeout(resolve, 100, 'someValue');
//     }
// );
// console.log(promise);

// let promise = new Promise(
//     function(resolve, reject){
//         setTimeout(reject, 100, 'someValue');
//     }
// );
// console.log(promise);

//* Settling a Promise
// let promise = new Promise(
//     function(resolve, reject){
//         setTimeout(resolve, 100, 'someValue');
//     }
// );
// promise.then(
//     value => console.log('fulfilled: ' + value), //first function resolve excuted
//     error => console.log('rejected: ' + error)
// );

// let promise = new Promise(
//     function(resolve, reject){
//         setTimeout(reject, 100, 'someValue');
//     }
// );
// promise.then(
//     value => console.log('fulfilled: ' + value),
//     error => console.log('rejected: ' + error)  //second function rejected excuted
// );

//DATA ACCESS USING HTTP
//* HTTP Requests Using XHR
// all about is: let xhttp = new XMLHttpRequest();
//https://www.mockapi.io/login

//* HTTP Requests Using jQuery
//npm install jquery //all lower case, as of today 8/30/2019 jquery version@3.4.1
//npm audit fix     //fixed vulnerabilities

//SOME PUBLIC API TO USE
//https://www.mockapi.io/projects
//https://jsonplaceholder.typicode.com/
//http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users
//https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg


// import $ from 'jquery';
// $.get("https://jsonplaceholder.typicode.com/todos/2",
//     data => console.log('data: ', data)
// );

// import $ from 'jquery';
// let promise = $.get("https://jsonplaceholder.typicode.com/todos/2");
// promise.then(   //setup handler
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)
// );

//to see error works too
// import $ from 'jquery';
// let promise = $.get("https://jjjjjjsonplaceholder.typicode.com/todos/2");
// promise.then(   //setup handler
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)
// );

//* HTTP POST Using jQuery
// import $ from 'jquery';
// let user = {
//     name: 'Mark Zamoyta',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg'
// };
// let promise = $.post(
//     "http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", user
// );
// promise.then(
//    data => console.log('success: ', data),
//    error => console.log('error: ', error) 
// );

/*summary
HTTP Requests Using XHR
    - too low level for typical use
HTTP Requests Using jQuery
    - let promise = $.get(url);
HTTP POST Using jQuery
    - let promise = $.post(url, data);

//FORMS
//*Preventing Form Submission
let form = document.getElementById('formid');
form.addEventListener('submit', event = > {
    event.preventDefault();
});
*/
//*Access Form fields - form.elements properties
//*Preventing Form Submission
/*let form = document.getElementById('formid');
form.addEventListener('submit', event = > {
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    console.log(user.value, avatarFile.value);
    event.preventDefault();
});
*/

//SECURITY AND BUILDING FOR PRODUCTION
//* Chrome Developer Tools and Security
//console.log("hello world");   -- f12 => Network =>js =>Preview

//window.foo="secret code";     -- f12 =>sources =>Watch (set foo)
//so, don't use golbal var
//or use: javascriptobfuscator.com/Javascript-Obfuscator.aspx
//Assume hackers can read your js code and access all data sent to browser

//*Prevent Man-in-the-Middle -- SSL, COOKIE UNDER SSL; HTTP Header: strciked Transfer security etc.

//* Cross-site Scripting(XSS) 
// CSP-Content Security Policy -- Use HTTP Header: Content-Security-Policy
// CORS-Cross Origin Resource Sharing -- Use HTTP Header: Access-Control-Allow-Origin

//Security is all about on the way transfer
//npm run dev
//npm run build
//dist folder

//RECOMMENDED TWO COURSES
//RAPID ES6 TRAINING
//OBJECT-ORIENTED PRIGRAMMING IN JavaScript - ES6



