console.log("Hello World");    

// question 2
// let personName: string = "Eric";
// let message: string = `Hello ${personName}, would you like to learn some Python today?`;
// console.log(message);


// question 3
// let personName: string = "John Doe";

// console.log("Lowercase:", personName.toLowerCase());
// console.log("Uppercase:", personName.toUpperCase());
// // Function to convert name to title case
// function toTitleCase(str: string): string {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

// Print name in title case
// console.log("Titlecase:", toTitleCase(personName));


// question 4
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);

//question 5
// let famous_person: string = "Albert Einstein";
// let quote: string = "A person who never made a mistake never tried anything new.";
// let message: string = `${famous_person} once said, "${quote}"`;
// console.log(message);

//question 6
// let personNameWithWhitespace: string = "\t\n   John Doe   \n\t";
// console.log("Name with whitespace:", personNameWithWhitespace);
// let strippedName: string = personNameWithWhitespace.trim();
// console.log("Stripped name:", strippedName);

// question 7
// // Addition operation resulting in 8
// console.log("Addition:", 5 + 3);

// // Subtraction operation resulting in 8
// console.log("Subtraction:", 10 - 2);

// // Multiplication operation resulting in 8
// console.log("Multiplication:", 4 * 2);

// // Division operation resulting in 8
// console.log("Division:", 16 / 2);

//question 8
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);

//question 9
// let favoriteNumber: number = 7;

// // Create a message revealing your favorite number
// let message: string = `My favorite number is ${favoriteNumber}.`;

// // Print the message
// console.log(message);


//question10
// // Author: [Your Name]
// // Date: [Current Date]

// // Store a person's name in a variable
// let personName: string = "Eric";

// // Create a message for the person
// let message: string = `Hello ${personName}, would you like to learn some Python today?`;

// // Print the message
// console.log(message);

//question 11
// // Store the names of your friends in an array called names
// let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emma"];

// // Print each person's name by accessing each element in the list, one at a time
// names.forEach(name => console.log(name));

// question 12
// Store the names of your friends in an array called names
// let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emma"];

// // Define the message
// let message: string = "Hello, ";

// // Print a personalized message to each person
// names.forEach(name => console.log(message + name));

//question 13
// Store your favorite modes of transportation in an array called transportation
// let transportation: string[] = ["car", "motorcycle", "bicycle", "train", "plane"];

// // Print statements about each mode of transportation
// transportation.forEach(item => console.log(`I would like to own a ${item}.`));

//question14
// Store the names of people you'd like to invite to dinner in an array called guestList
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];

// // Print an invitation message to each person
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));


//question15
// Store the names of people you'd like to invite to dinner in an array called guestList
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];

// // Print an invitation message to each person
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));

// // Print the name of the guest who can't make it
// let cantMakeIt: string = "Jane Austen";
// console.log(`${cantMakeIt} can't make it to dinner.`);

// // Replace the name of the guest who can't make it with the name of the new person you are inviting
// let newGuest: string = "Isaac Newton";
// let index: number = guestList.indexOf(cantMakeIt);
// if (index !== -1) {
//     guestList[index] = newGuest;
// }

// // Print a second set of invitation messages
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));


//question 16
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];

// // Print an invitation message to each person
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));

// // Print a message informing people that you found a bigger dinner table
// console.log("Great news! I found a bigger dinner table!");

// // Add one new guest to the beginning of the array
// guestList.unshift("Marie Curie");

// // Add one new guest to the middle of the array
// guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla");

// // Add one new guest to the end of the array using push()
// guestList.push("Ada Lovelace");

// // Print a new set of invitation messages
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));

// //question 17
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
// console.log("Great news! I found a bigger dinner table!");
// guestList.unshift("Marie Curie");
// guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla");
// guestList.push("Ada Lovelace");
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));

// //question 18
// let placesToVisit: string[] = ["Paris", "Tokyo", "Machu Picchu", "Santorini", "Sydney"];
// console.log("Original Order:", placesToVisit.join(", "));
// console.log("Alphabetical Order:", [...placesToVisit].sort().join(", "));
// console.log("Original Order:", placesToVisit.join(", "));
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse().join(", "));
// console.log("Original Order:", placesToVisit.join(", "));
// console.log("Reversed Order:", placesToVisit.reverse().join(", "));
// console.log("Reversed Again:", placesToVisit.reverse().join(", "));
// console.log("Sorted Alphabetical Order:", placesToVisit.sort().join(", "));
// console.log("Reverse Sorted Alphabetical Order:", placesToVisit.sort().reverse().join(", "));

// //question 19
// console.log(`Number of people invited to dinner: ${guestList.length}`);

// //question 20
// let mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Makalu", "Cho Oyu"];

// //question 21
// let person: {name: string, age: number, city: string} = {name: "John", age: 30, city: "New York"};

// //question 22
// let numbers: number[] = [1, 2, 3];
// // console.log(numbers[10]); // This line produces an error because the index 10 is out of range

// //question 23
// let car: string = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// // Add more conditional tests here...

// //question 24
// console.log("Equality Test with Strings:", 'apple' == 'apple');
// console.log("Inequality Test with Strings:", 'apple' != 'orange');
// console.log("Lowercase Test:", 'Apple'.toLowerCase() == 'apple');
// console.log("Numerical Tests:", 5 > 3, 10 <= 20, 15 != 20);
// console.log("Logical AND Test:", true && false);
// console.log("Logical OR Test:", true || false);
// console.log("Item in Array Test:", mountains.includes('Everest'));
// console.log("Item not in Array Test:", !mountains.includes('Denali'));

// //question 25
// let alien_color: string = 'green';
// if (alien_color == 'green') console.log("You just earned 5 points!");

// //question 26
// if (alien_color == 'green') {
//     console.log("You just earned 5 points for shooting the alien.");
// } else {
//     console.log("You just earned 10 points.");
// }

// //question 27
// if (alien_color == 'green') {
//     console.log("You earned 5 points.");
// } else if (alien_color == 'yellow') {
//     console.log("You earned 10 points.");
// } else if (alien_color == 'red') {
//     console.log("You earned 15 points.");
// }

// //question 28
// let age: number = 35;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age < 4) {
//     console.log("The person is a toddler.");
// } else if (age < 13) {
//     console.log("The person is a kid.");
// } else if (age < 20) {
//     console.log("The person is a teenager.");
// } else if (age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

// //question 29
// let favorite_fruits: string[] = ["banana", "apple", "mango"];
// if (favorite_fruits.includes("banana")) console.log("You really like bananas!");
// // Add more if statements for other fruits...

// //question 30
// let usernames: string[] = ["admin", "John", "Jane", "Doe"];
// usernames.forEach(username => {
//     if (username == 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });

// //question 31
// let users: string[] = []; // Initialize an empty array for users
// if (users.length === 0) { // Check if the list of users is empty
//     console.log("We need to find some users!"); // Print a message if the list is empty
// } else {
//     users.forEach(user => console.log(user)); // Print each user if the list is not empty
// }

// //question 32
// let current_users: string[] = ["John", "Jane", "Alice", "Bob", "Charlie"];
// let new_users: string[] = ["Jane", "Charlie", "Eve", "Adam", "Frank"];

// new_users.forEach(new_user => {
//     if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
//         console.log(`Sorry, ${new_user} is already taken. Please choose a different username.`);
//     } else {
//         console.log(`${new_user} is available.`);
//     }
// });

// //question 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number => {
//     if (number === 1) {
//         console.log(`${number}st`);
//     } else if (number === 2) {
//         console.log(`${number}nd`);
//     } else if (number === 3) {
//         console.log(`${number}rd`);
//     } else {
//         console.log(`${number}th`);
//     }
// });

// //question 34
// let pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
// pizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
// console.log("I really love pizza!");

// //question 35
// let animals: string[] = ["Dog", "Cat", "Rabbit"];
// animals.forEach(animal => console.log(`A ${animal.toLowerCase()} would make a great pet.`));
// console.log("Any of these animals would make a great pet!");

// //question 36
// function make_shirt(size: string, message: string): void {
//     console.log(`A ${size} shirt with the message "${message}"`);
// }

// make_shirt("Large", "I love TypeScript");

// //question 37
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`A ${size} shirt with the message "${message}"`);
// }

// make_shirt();
// make_shirt("Medium");
// make_shirt("Small", "Hello, World!");

// //question 38
// function describe_city(city: string, country: string = "Pakistan"): void {
//     console.log(`${city} is in ${country}`);
// }

// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("New York", "USA");

// //question 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("London", "UK"));
// console.log(city_country("Tokyo", "Japan"));

// //question 40
// function make_album(artist: string, title: string, tracks?: number): Object {
//     let album: any = {
//         "artist": artist,
//         "title": title
//     };

//     if (tracks !== undefined) {
//         album["tracks"] = tracks;
//     }

//     return album;
// }

// console.log(make_album("Artist 1", "Album 1"));
// console.log(make_album("Artist 2", "Album 2", 10));

// //question 41
// let magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];

// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }

// show_magicians(magicians);

// //question 42
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }

// magicians = make_great(magicians);
// show_magicians(magicians);

// //question 43
// let original_magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];
// let great_magicians: string[] = make_great([...original_magicians]);

// show_magicians(original_magicians);
// show_magicians(great_magicians);

// //question 44
// function make_sandwich(...items: string[]): void {
//     console.log("You ordered a sandwich with:", ...items);
// }

// make_sandwich("Bread", "Cheese", "Tomato");
// make_sandwich("Ham", "Lettuce", "Mayonnaise", "Mustard");

// //question 45
// function car_info(manufacturer: string, model: string, ...extras: string[]): Object {
//     let car: any = {
//         "manufacturer": manufacturer,
//         "model": model
//     };

//     extras.forEach(extra => {
//         let [key, value] = extra.split(":");
//         car[key] = value;
//     });

//     return car;
// }

// console.log(car_info("Toyota", "Corolla", "Color: Red", "Year: 2022"));
// console.log(car_info("Honda", "Civic", "Color: Blue", "Automatic: Yes", "Sunroof: No"));

