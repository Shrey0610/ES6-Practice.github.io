//import & export-
import { someFunction } from './example.mjs';

someFunction();

import { add } from './example.mjs';

const result=  add(9,10)
console.log(result);


//Classes-
import { Animal, Cat, Player, TennisPlayer } from './example.mjs'

let cat= new Animal('cat','orange');
let cat2= new Cat('cat','orange');

// console.log(cat.color);
// console.log(cat.makeNoise('meow'))

// console.log(Animal.return10()) //we don't have to intantiate any variable to assign to animal here since it is static

console.log(cat.metadata);
//DON'T USE METADATA() HERE SINCE IT IS NOT A FUNCTION

cat2.makeNoise();

console.log(cat2.metadata);

let player= new Player('Messi', 'Argentina');

player.detail();

let tennisplayer= new TennisPlayer('Rafael Nadal','Spain' ,34);

tennisplayer.tennisdetail();