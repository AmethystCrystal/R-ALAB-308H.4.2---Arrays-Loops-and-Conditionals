// Write a for loop that will log the numbers 1 through 20.

// for (let i = 1; i <= 20; i++ ){
//     console.log(i);
// }

// Write a for loop that will log only the even numbers in 0 through 200.

// for (let i = 0; i <= 200; i++){
//     if (i % 2 === 0) console.log(i)
    
// }

// Fizz Buzz

// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else if (i % 3 === 0) {
//        console.log("Fizz"); 
//     }
//     else {
//         console.log(i);
//     }
// }

// Use the following arrays to answer the questions below 
// (name, species, age, hometown).

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
 
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// plantee[2] = 5001
// console.log(plantee)

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// wolfy[3] = "Gotham City"
// console.log(wolfy)

// Give D'Art a second hometown by adding "Hawkins"

// dart[3] = "Upside Down, Hawkins" /* Adding on to index 3 */
// dart.push("Hawkins") /* Adding a whole new index 4 */
// console.log(dart)

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy
// array and replace it with "Gameboy".

// wolfy.splice(0, 1, "Gameboy")
// console.log(wolfy)

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// Use a for of loop to call toUpperCase() on each of them and print out the result.

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// for (const turltes of ninjaTurtles) {
//     const upperCase = turltes.toUpperCase();    
//     console.log(upperCase);
// }

// Here is a list of favorite movies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 
'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log the index of Titanic.

// console.log(favMovies[8]);

// Use the .sort method.

// favMovies.sort();
// console.log(favMovies);

// Thought Question: What did this do to the array? Did it permanently alter it? It sorted in alphabetical order and permanelty changed the order.

// Use the method pop.

// favMovies.pop();
// console.log(favMovies);

// push "Guardians of the Galaxy".

// favMovies.push('Guardians of the Galaxy');
// console.log(favMovies);

// Reverse the array.

// favMovies.reverse();
// console.log(favMovies);

// Use the shift method.

// const movies = favMovies.shift();
// console.log(favMovies); /* This variable holds the list minus 'Jaws' */
// console.log(movies); /* This variable holds 'Jaws' */

// unshift - what does it return?

// favMovies.unshift('Hocus Pocus')
// console.log(favMovies); /* It returned the list plus my new movie at the top of the list */

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).

// let index = favMovies.indexOf("Django Unchained");
// console.log(index);
// favMovies.splice(3, 1, 'Avatar')
// console.log(favMovies);

// slice the last half of the array. 

