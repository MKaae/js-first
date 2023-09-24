//Copy pasted 3 functions from assignment added try catch block for question.
function add(n1, n2){
    return n1+n2;
}

const sub = function(n1,n2){
    return n1-n2;
}

const cb = function(n1,n2, callback){
    try {
        return "result from the two numbers: "+n1+"+and"+n2+"="+callback(n1,n2);   
    } catch (error) {
        console.log("Error handling the request")
    }
};
//Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening

console.log(add(1,2)) //It will print 3 (1+2)
console.log(add) //It will print the name of the function [Function: add] reference
console.log(add(1,2,3)) //It will print 3 (1+2) third number is ignored because it only takes 2 numbers
console.log(add(1)) //Since we are only adding 1 number it takes it as there is something missing or "undefined". NaN means not a number.
console.log(cb(3,3,add)) //This calls cb function first with 3 and 3 and then callbacks to add function with same numbers.
console.log(cb(4,3,sub)) //This function calls 4 and 3 and then callbacks the sub function with the same numbers.
console.log(cb(3,3,add())) //This tries to callback the add functions result without parsing the numbers. Remove () to not invoke it.
console.log(cb(3,"hh",add)) //This uses 3 as a number and "hh" as the String and concatonates them with + signs. 

function addVersion2(n1, n2, ...rest){
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
 }

 console.log(addVersion2(1,2,3,4,5,6))
//Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
 function mul(n1,n2){
    return n1*n2;
 }
 console.log(cb(2,3,mul))
// Call cb, this time with an anonymous function that divides the first argument with the second
 const result = cb(2, 3, function(n1, n2) {
    return n1 / n2;
  });

console.log(result)

//Declare a JavaScript array and initialise it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
//Use the filter method to create a new array with only names of length <=3.
const nameArray = ["Peter", "Jan", "Ian", "John", "Bo", "Michael", "Lars", "Frank"];
console.log("-Original Array-");
const newArray = nameArray.filter(name => name.length <=3);
//Use the forEach method to iterate and print (console.log) both the original and the new array.
nameArray.forEach(name => {console.log(name)});
console.log("-New Array-");
newArray.forEach(name =>{console.log(name)});
//Use the names-array created above, and, using its map method, create a new array with all names uppercased.
const upperCaseArray = nameArray.map(name => name.toUpperCase());

// Use map, join + just a little bit more to create a function, which given the array of names, for example: 
// ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> with an <li> around the names
function createHTMLFromNames(names) {
    const nameItems = nameArray.map(name => `<li>${name}</li>`).join('');
    const html = `<ul>${nameItems}</ul>`;
    return html;
  }
  const htmlString = createHTMLFromNames(nameArray);
  
  console.log(htmlString);
//this is actually what we want (why) - explain the htmlString console output
//Because it doesn't matter about readiblity, HTML doesnt care about newlines it reads it without it anyways from start <ul> to </ul>.

// Given this JavaScript array
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
// Use the filter filter function to get arrays with only:
// Cars newer than 1999 
const newCars = cars.filter(car => car.year > 1999)
// Al  Volvo’s
const volvoCars = cars.filter(car => car.make === "Volvo")
// All cars with a price below 5000
const cheapCars = cars.filter(car => car.price < 5000)

// Use map, join + just a little bit more to implement a function, that , given the cars array used above, 
// will create, and return a string with valid SQL statements to insert the data into a table with matching 
// column names (id, year, make, model, price)

function createSQLStatement(cars) {
    const columns = Object.keys(cars[0]).join(',');
    const values = cars.map(car => {
      return `(${car.id}, ${car.year}, ${car.make}, ${car.model}, ${car.price})`;
    });
    return `INSERT INTO cars (${columns}) VALUES ${values.join(', ')};`;
  }
  const sqlStatement = createSQLStatement(cars);
  console.log(sqlStatement);

// Implement a function: myFilter(array, callback)that takes an array as the first argument, 
// and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
// Test the method with the same array and callback as in the example with the original filter method.
function myFilter(array, callback){
    const tempArray = [];
    for(let i = 0; i < array.length; i++){
        if(callbackFunction(array[i])){
            tempArray.push(array[i]);
        }
    }
    return tempArray;
}
function filterByLength(string, lengthCheck) {
    return typeof string === 'string' && string.length === lengthCheck;
}
function callbackFunction(string){
    return filterByLength(string, 3);
}
const filterArray = myFilter(nameArray, callbackFunction); 
const filterArray2 = nameArray.filter(name => name.length === 3);
console.log(filterArray, filterArray2)
// Hard to understand assignment is this what u want ? 
// We can write other filter methods and use them in callbackFunction.


// Implement a function: myMap(array, callback)that, provided an array and a callback, 
// provides the same functionality as calling the existing map method on an array.
function myMap(array, callback){
    tempArray = [];
    for(let i = 0; i < array.length; i++){
        const result = callbackMap(array[i])
        tempArray.push(result);
    }
    return tempArray;
}
function callbackMap(n1){
    return n1*n1;
}
const numbers = [1,2,3,4];
const mappedNumbers = myMap(numbers, callbackMap);
const originalMap = numbers.map(number => number * number);
console.log(originalMap);
console.log(mappedNumbers);
//Same as before an example of a map function but not all map functions since you would have to write them individually.

//It will execute a,d,f,e after 1 sec,b after 2 sec.
//See code below question was what executes first.
const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
  };
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
const myObj = {name: "Mathias", birthday: 1987, hobby: "Reading", email: "Secret@Secret.secret"}

//Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object
for(prop in myObj){
    console.log(prop,myObj[prop])
}
// Use the delete keyword to demonstrate we can delete existing properties from an object 
// (delete a property, and iterate over the properties again) 
delete myObj.name;
for(prop in myObj){
    console.log(prop,myObj[prop])
}
//Add a new property to your object to demonstrate that we can add new properties to existing object
myObj[`lastname`] = `Kaae`;

// Implement a reusable function using the Module pattern that should encapsulate information about a person 
//(name, and age) and return an object with the following methods:
// setAge
// setName
// getInfo (should return a string like Peter, 45)
        
const person = (function() {
    let name = '';
    let age = 0;

    function privateInfoFormatter() {
      return `${name}, ${age}`;
    }
    return {
      setAge: function(newAge) {
        age = newAge;
      },
  
      setName: function(newName) {
        name = newName;
      },
      getInfo: function(){
        return name+", "+age;
      }
    };
})();
person.setName('Peter');
person.setAge(45);
console.log(person.getInfo());