//Arrow Function-
    //function declaration
    function breakfastMenu() {
        return "I'm going to scrambled eggs for breakfast";
    }

    //anonymous function
    const lunchMenu = function() {
        return "I'm going to eat pizza for lunch";
    }


    const dinnermenu= (food)=>  `I'm going to eat a ${food} for dinner` //we don't need to specify return


    const dinnermenu2= food2=>  `I'm going also to eat a ${food2} for dinner` //don't need to add paranthesis if there is only one argument

    const dinnermenu3= (...food)=>  `I'm going to eat a ${food} for dinner` //using both arrow and spread operator
    

    console.log(dinnermenu("pizza"));
    console.log(dinnermenu2("pasta"));
    console.log(dinnermenu3("pasta ", "pizza ", 'dosa'));





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
function addressMakerr(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMakerr('Austin', 'Texas');


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




//challenge

//Imagine you are going out to do some grocery shopping. So you have an array called shoppingList with all the products you want to buy. Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more. Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

const shoppingList = ["eggs", "milk", "butter"];
const newlist= [...shoppingList, "bread", "crossoint", "peanutbutter"]

console.log(newlist)


//Rest Operator- 
function add(nums){
    console.log(arguments) //Misc.- Will print out all the arguments in terms of an object
    console.log(nums)
}

function add2(...nums){
    console.log(nums)
}

add(4,5,6,7,8,9)
add2(4,5,6,7,8,9) 



//Default Params-
const leadSinger = (artist = "Shrey") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();


// Default Params Challenge-
//Create a function that receives a parameter of food.
//If your parameter food is going to have a value of "milk" the function should print into the console the following: "I'm going to buy milk from the grocery shop"
//But if you dont pass a value to your parameter food, it should print :"I'm going to buy something from the grocery shop"


const grocery= (food= 'something')=>{

    if (`${food}` != null){
    console.log(`I'm going to buy ${food} from the grocery shop`)
    }

    else{
        console.log(`I'm going to buy ${food} from the grocery shop`)
    }
}

grocery()



// includes()-

let numArray= [1,2,3,4,5]
console.log(numArray.indexOf(0)) //old method for finding inclusivity

console.log(numArray.includes(0)) //here it returns a boolean value


//includes() challenge-
const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if(listIngredients.includes('chocolate')){
    console.log('We are going to make a chocolate cake')
}
else{
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
}


//let & const- (does not use hoisting)
const  example= 5;
console.log(example)

var example2= [];
example2.append= 'a';
console.log(example2);




//padStart() & padEnd()-
let namedd= 'Shrey';

console.log(namedd.padStart(10,'p'));

console.log(namedd.padEnd(10,'z'));