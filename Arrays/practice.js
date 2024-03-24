// Creating arrays

// New Syntax
const myArray = new Array();

// literals syntax
const Array = [];

// object.create syntax
const arr = Object.create(Array.prototype);

// Array.of
const intArray = Array.of();

// Array.from
const a = Array.from();

const myString = "Rider";
for (const char of myString) { 
  console.log(char);
}
// Another way to do this 
const myStrng = "rider";
const ArrayString = Array.from(myStrng);

// splice and slice 

const arrr = ["apple", "mango", "orange", "banana"];
let myArry = arr.splice(1, 3);
console.log(myArray);

const int = [2, 3, 4, 66, 79, 86];
let sliced = int.slice(1, 4);
console.log(sliced);


// sort function
const intArray = [22, 39, 12, 36, 70, 55];

const comparisonFunction = function(a, b) { 
  if (a < b) return 1;
  if (b < a) return -1;
  return 0;
};
intArray.sort(comparisonFunction);
console.log(intArray)

/ Continue and break;
for (i = 0; i < Array.length; i++) { 
 if ( arr[i] == undefined ) continue; 
}

let foundElement;
for (i = 0; i < Array.length; i++) { 
  if (array[i].id == idToSearch) { 
    foundElement = array[i];
    break;
  }
}

// Some and every
let Ar = [2, 4, 6];
arr.some(element => { 
  return element > 4;
});

// Reduce function
let discountAmount = cart.product.reduce( 
  (accumulator, product) => { 
    return accumulator - product.price;
  }, 25);

// Include function
let contentBlocks = [];
let newBlock = {id: "001", tittle: "Block 1"};
contentBlocks.push(newBlock);

contentBlocks.includes(newBlock, 3);

// find function 
let boolmarkedBlocks = 
course.content.filter( block => { 
  return block.bookmarked == true;
})

// Filter function
let Array1 = [10, 20, 30, 40, 50, 60];

const new1 = Array1.filter((elements) => elements > 10);
console.log(new1);
