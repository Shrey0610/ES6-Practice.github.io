//template literals-

let x= 'A'
let y= 'B'

const z= `${x} says hello to ${y}`
console.log(z)
// let consta= 'This is the first ES6 file'; 
// document.getElementById("para").innerText= consta;


//destructuring objects-

const player = {
    named: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };

console.log(player.named);

const {named, club, address: {city}}= player;

console.log(`${named} plays for ${club}`);
console.log(`${named} lives in ${city}`); 



//destructuring arrays-
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

console.log(firstName + " " + lastName);
lastName = 'Shah';
console.log(lastName);



//Object literals-
function addressMaker(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');


//all of the above-
function addressMaker(address) {
    const {city, state}= address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    
   
    console.log(`${newAddress.city} and ${newAddress.state} of ${newAddress.country}`);   
}

addressMaker({city: 'Austin', state: 'Texas'});




//for of loop-

let incomes= [62000,67000, 75000]

let total= 0

for (const income of incomes){
    total+= income
}
console.log(total)



// Challenge-
// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon


const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sydney" }
]

const [first, second, third]= students;

for (const studentss of students){
    console.log(studentss.name + ' lives in ' + studentss.city);
}

console.log(`${second.name} lives in ${second.city}`);




// Spread operator-
let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = contacts;

let personalFriends2 = [...contacts];

let personalFriends3 = ["Shrey",...contacts, "Shah"];

contacts.push("John");

console.log(personalFriends); //will change beacause it is a reference
console.log(personalFriends2); 

console.log(personalFriends3);

let person={
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee={
     ...person,
     salary: 50000,
     position: "Software Developer"
}

console.log(employee);