//number1
//es5
 var person = {
    fullName: "Harry Potter",
    sayHi: function(){
    setTimeout(function(){
    console.log("Your name is " + this.fullName)
    }.bind(this),1000)
    }
    }
//es15
let person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(()=> console.log(`Your name is ${this.fullName}`),1000)
    }
}

//number2
//es5
var name = "Josie"
console.log("When " + name + " comes home, so good")
//es15
let name = "Josie"
console.log(`When ${name}  comes home, so good`)

//number3
//es5
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;
//es15
const DO_NOT_CHANGE = 42;

//number4
//es5
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
//es15
let arr = [1,2]
let temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

//number5
//es5
function double(arr){
    return arr.map(function(val){
    return val*2
    });
    }
//es15
const double = arr => arr.map(val => val*2);

//number6
//es5
var obj = {
    numbers: {
    a: 1,
    b: 2
    }
    }
    var a = obj.numbers.a;
    var b = obj.numbers.b
    //es15
    let obj = {
        numbers: {
        a: 1,
        b: 2
        }
        }
      let {numbers:{a,b}} = obj;

//number7
//es5
function add(a,b){
    if(a === 0) a = 0
    else {
    a = a || 10
    }
    if(b === 0) b = 0
    else {
    b = b || 10
    }
    return a+b
    }
//es15
const add = (a = 10, b = 10) => a+b;

//Array.from ; returns an Array object from any object with a length property or an iterable object.
//Object.assign ; is used to copy the values of all enumerable own properties from one or more source objects to a target object. Objects are assigned and copied by reference.
//Array.includes ;  is an inbuilt function that determines whether the array contains the specified element or not. It returns true or false as output depending on the result and is case sensitive.
//String.startsWith ;  determines whether a string begins with the characters of a specified string and returns true if the string begins with the characters, and false if not and is case sensitive.

    
        

