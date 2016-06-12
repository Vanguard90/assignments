/*
  Create a for loop that counts down from 20 to 1
  For each iteration log the current counter
*/

{
for (let x=20; x > 0; x--) {
    console.log(x);
}
}

/*
  Create a for loop that creates the following arrays
  [17, 34, 51, 68, 85], [17, 34, 51, 68, 119] and [17, 34, 51, 68, 200]
  Each array in a seperate loop
*/
{
let arr1 = [];

for (var i=0; i < 6; i++) {
    arr1.push(17*i);
}

console.log(arr1);
}
{
let arr2 = [];

for (var i=0; i < 8; i++) {
    arr2.push(17*i);
}

console.log(arr2);
}

// Check it later again.
/*
  Create while loop, multiple 2 by 2 and continue doing that until you reach 1.000.000
  return the amount of steps it took
*/

/*
let multiply = 2*2;

while (i=0) {
    i++;
    (multiply*i) += var multiplyfull;
    multiplyfull < 1000001;
    
}
*/

// Check later.

/*
  Use the array map function to convert the following input array to the output array
  input [10, 20, 30, 40, 50]
  output [5, 10, 15, 20, 25]
*/

let input = [10, 20, 30, 40, 50];

let output = input.map(function (x){
    return x/2;
})

console.log(output);


/*
  Use the array filter method to remove all characters that are not from the simpsons
  ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo']
  For the people who don't know the characters from the Simpsons, Ernie, Bert and Baloo are not in the show.
  But more importantly go watch the show instead of doing these assignments. Ahum.
*/

let arr = ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo'];

function filterFunction(x) {
    return x !== 'Ernie';
    return x !== 'Bert';
    return x !== 'Baloo';
}

function filterFunction2(x) {
    return x !== 'Bert';
}

function filterFunction3(x) {
    return x !== 'Baloo';
}

let filtered = arr.filter(filterFunction);
let filtered2 = filtered.filter(filterFunction2);
let filtered3 = filtered2.filter(filterFunction3);

console.log(filtered3);

// This is horribly inefficient. Can you point out a better way to do this while using filter?

/*
  Convert the following object to an array
  The array should look like ['klarendal', 'alteveer', ...]
*/
let suburbsInArnhem = {
  klarendal : 'noord',
  alteveer : 'noord',
  schuitgraaf : 'zuid',
  lombok : 'noord',
  heijenoord : 'noord',
  spijkerkwatier : 'noord'
};

let newArray;

newArray = array.from(suburbsInArnhem);
console.log(newArray);
