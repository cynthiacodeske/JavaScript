//arrays in JavaScript

//an array is a collection of multiple values separated by a comma inside square brackets []

let empty = []; //this is an empty array

let numbers = [1, 2, 3 , 4 , 5, 6, 7, 8 ,9 ,10, 11 ,12, 13, 14, 15, 16, 17]; //array of numbers
              
let names = ["John", "Janet", "Jaba", "Januaris", "Jake"]; //array of strings

let mixed1 = [1, "Jane", "Jade", 30, true]; //this is an area with mixed data types

let cars = [["Model S", "Model Y", "Plaid"], ["X5", "X3", "X1"], ["C", "G+"]]; // array of arrays

//accessing elements inside of arrays
//index - position of a value in an array
//in JavaScript, indexing starts from 0

console.log (numbers[4]);
console.log (names[0]);

//accessing arrays of arrays
console.log (cars [2][1])

let mixed = [1, ["Model S", "Model Y", "Plaid"], "Kenya", ["X5", "X3", "X1"], true, ["C", "G"], "20"]; // array of arrays

//Access the elements inside the mixed array and print them out.
console.log (mixed [0])
console.log (mixed [1])
console.log (mixed [2])
console.log (mixed [3])
console.log (mixed [4])
console.log (mixed [5])
console.log (mixed [6])

//Also access and print the elements inside the arrays that are in the mixed array
console.log (mixed[0])
console.log (mixed[1][0])
console.log (mixed[1][1])
console.log (mixed[1][2])
console.log (mixed[2])
console.log (mixed[3][0])
console.log (mixed[3][1])
console.log (mixed[3][2])
console.log (mixed[4])
console.log (mixed[5][0])
console.log (mixed[5][1])
console.log (mixed[6])

//array methods
numbers.push(10); //adds an element i.e. 10 to the end of the array
numbers.pop (0) //removes the last element in an array

numbers.unshift(0); //adds an element to the beginning of the array
numbers.shift(); //removes the first element of the array

numbers.reverse (); //reverses the array
numbers.sort (); //arrange the number in an ascending number

let new_array = numbers.slice (0,5);
let new_array1 = numbers.slice (6,11);
let new_array2 = numbers.slice (12,17);

console.log(new_array);
console.log(new_array1);
console.log(new_array2);

empty.push (new_array)

console.log (numbers.length); //this returns the size of the array
console.log (mixed.length)

console.log(names[name.length - 1]); //retuns the last element of the array

console.log (empty)







