// Below are the assignments for Datatypes

/*
  In the array below are a couple of odd numbers, we want to retrieve those numbers.
  Create a new variable called 'odds' and 'push' all odd numbers to this new array using some sort of loop
  Display the odds array to the console.
*/
let all = [12, 1238, 3724, 43, 89, 11, 32443287];

let doubles = all.map(function (x){
    if (x%2==0) {
        return x;
    } else {
        delete x;
    }
});

doubles.splice(3,4);

console.log(doubles);

/*
  We want to round the decimal below, write some code that rounds the decimal to 8 and 7
*/
let decimal = 7.5;

let x;

let dummyText= function (x){
    
    while (decimal%2!=0) {
    
    let x = decimal+0.5;
        
    return x;
}
}
console.log(dummyText);

//I can't get this to work for some reason....

/*
  In the following string replace 'and' with 'or'
*/
let str = "Hello and welcome to javascript!"

let str2 = str.split(" ");
  
str2[1] = "or";

let str3 = str2.join(" ")

console.log(str3);
// I could've also done it with less variables, but this way still works.


/*
  Remove the last element from array a
  Remove the first element from array b
  Combine array a and b into one array called c
  Sort the array alphabetically
*/
let a = ['cookiemonster', 'grover', 'big bird', 'bert', 'ernie'];
let b = ['kermit', 'miss piggy', 'statler', 'waldorf'];

a.pop();
b.shift();

let ab = a.concat(b);
ab.sort();
console.log(ab);

/*
  Remove the element 'heineken' from the beers array
*/
let beers = ['amstel', 'heineken', 'grolsch', 'hertog jan'];

beers.splice(1,1);

console.log(beers);

/*
  Convert the following string to an array, every word has to be a new element.
  The last two words have to be a single element and the code cannot contain a fixed numbers so no 3 as a limit
*/
let toBeArray = 'I am the javascript king';

let array = toBeArray.split(" ");

array.splice(3,2, "javascriptking");
//Removes two elements starting from index 3, add string.

console.log(array);
