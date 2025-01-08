// var x = 0; // Declares x within file scope, then assigns it a value of 0.

// console.log(typeof z); // "undefined", since z doesn't exist yet

// function a() {
//   var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

//   console.log(x, y); // 0 2

//   console.log(typeof y); // "undefined", as y is local to function a
//   function b() {
//     x = 3; // Assigns 3 to existing file scoped x.
//     y = 4; // Assigns 4 to existing outer y.
//     z = 5; // Creates a new global variable z, and assigns it a value of 5.
//     // (Throws a ReferenceError in strict mode.)
//   }

//   b(); // Creates z as a global variable.
//   console.log(x, y, z); // 3 4 5
// }

// a(); // Also calls b.
// console.log(x, z); // 3 5
// console.log(typeof y); 


// // SyntaxError: Identifier 'a' has already been declared (you can't declare with 'let' and use the parameter with the same name)
// // function foo(s) {
// //     let s = 1; 
// //   }

// function varTest() {
//     var x1 = 1;
//     {
//       var x1 = 2; // same variable!
//       console.log(x1); // 2
//     }
//     console.log(x1); // 2
//   }
  
//   function letTest() {
//     let x2 = 1;
//     {
//       let x2 = 2; // different variable
//       console.log(x2); // 2
//     }
//     console.log(x2); // 1
//   }
  
//     varTest();
//     letTest();




const add= (x, y) => x + y;

console.log(add(1,2))

const square= (x) => x*x;

console.log(square(9))

const addandsum= (x,y) => {
    sum= x+y;
    return(sum);
}

console.log(addandsum(3,4))

const div= (x,y) => {
    divv= x/y;
    return(divv);
}

console.log(div(9,3))


const low= x => x.toLowerCase();
console.log(low('A'))


const shorterThan= (x,y)=> x.length < y.length

console.log(shorterThan([1,2,3,4],[5,54,2,2,2]))


// will give error-
    // function declareBankruptcy() {
    //     let bankruptcy = true;
    // }
    // declareBankruptcy();
    // console.log(bankruptcy);


let globalVariable = "I live in global scope"; 
function narrowerScope() {
        console.log(globalVariable);
        let localVariable = "I live in the function scope";
    }

    narrowerScope();
    // console.log(localVariable);


    let feeling = "free";
    console.log(feeling);
    // const feeling = "free"; // can't do with const.
    function trap() {
        feeling = "boxedIn";
    }
    trap();
    console.log(feeling);
    
    

// diff between var and let
    var newVariable= 'new';

    console.log(newVariable);

    function messed(){
        newVariable= 'mess';
    }

    messed();
console.log(newVariable);


{
    var newVariable= 'moremess';
}

console.log(newVariable);


let moremesss= 'moremesss';
console.log(moremesss);

function okdone(){
    let moremesss= 'moremesss2';
    console.log(moremesss);
}

okdone();
console.log(moremesss);

//var can be changed after re-declaring and re-assiging but let can only be changed after re-assiging, if declared again in a different scope it will not change outside it. 
// MEANING: i can't declare and change the value using 'let' inside a scope to get it outside!!



const first1= 'Shrey';
const last1= 'Shah';

const test1= ()=> {
    console.log((first1.length > last1.length) ? 'yes': 'no');
}

test1();

const isEmpty= (array)=>{
    if(array.length === 0){
        console.log('Is empty');
    }
    else{
        console.log('nope');
    }
}

const array= [1,2,3]
isEmpty(array);


let someoneIsAroundYou = false; 
if (!someoneIsAroundYou) {
    console.log("yessss");
}


let forecast= "sunny";
let mood = forecast === "sunny" ? "happy" : "sad";

console.log(mood);


for(let x of ['a', 1, 'l']){
    console.log(x, 'is a', typeof(x));
}



//Maps & Filters- both will have arrays as their output
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const nicknames = spices.map(s => `${s.nickname} Spice`);
console.log(nicknames);

const mels= spices.filter(s=> s.name.includes('Mel'));
console.log(mels);

const endInY= spices.filter(s=> s.nickname.endsWith('y'))
console.log(endInY);

const onlynames= spices.map(s=> s.name);
console.log(onlynames);

let o= 'hello'

console.log(`${o} world`);


const skills = ["HTML", "CSS", "JS"];
const newSkills = ["React", "TypeScript", "Node"]
// skills.push(newSkills);
skills.push(...newSkills);
console.log(skills)
console.log(...skills)