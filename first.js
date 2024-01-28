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
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Joshi'];

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