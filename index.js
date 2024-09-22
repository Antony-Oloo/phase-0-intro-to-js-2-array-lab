// Write your solution here!
// Initialize 
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Methods

// Adds a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Adds a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
// Removes the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}
// Removes the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}
// Adds a cat to the end of a new array
function appendCat(name) {
  return [...cats, name];
}
// Adds a cat to the beginning of a new array
function prependCat(name) {
  return [name, ...cats];
}
// Removes the last cat from a new array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat from a new array
function removeFirstCat() {
  return cats.slice(1);
}
