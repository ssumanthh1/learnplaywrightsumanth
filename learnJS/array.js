// let items=[]
// let you=items.slice(1,2)
// console.log(you)

// const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']


// const colors2=colors.slice(3)
// console.log(colors2)


// const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin', 'Sydney']
// const cities2=cities.slice()
// console.log(cities2);

// const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(numbers.slice(-4,-1));


// let fruits = ["apple", "banana", "cherry", "date"];
// let removed = fruits.splice(1,3); 

// console.log(fruits);  // ["apple", "date"]
// console.log(removed); // ["banana", "cherry"]

let colors = ["red", "blue","TreeWalker","pot"];
colors.splice(1, 0, "green", "yellow"); 

console.log(colors);  // ["red", "green", "yellow", "blue"]

let games = ["cricket", "football", "tennis"];
let indexed = games.map((letter, i) => `${i}: ${letter}`);

console.log(indexed); // ["0: a", "1: b", "2: c"]

