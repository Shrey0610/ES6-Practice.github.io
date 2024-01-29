export function someFunction() {
    console.log('Hello from someFunction!');
  }

export const add= (a,b)=>{
    return a+b
}

export class Animal{
  constructor(type,color){
      this.type= type;
      this.color= color;
  }

  makeNoise(sound= 'roar'){
    console.log(sound);
  }

  get metadata(){
    return `Type: ${this.type} and Color: ${this.color}`
  }

  static return10(){
      return 10;
  }
}

export class Cat extends Animal{
  constructor(type,color, tail){
    super(type,color);
    this.tail= tail;
  }

  makeNoise(sound= 'meow'){
    console.log(sound);
  }
}


export class Player{
  constructor(Name, Country){
    this.name= Name;
    this.country= Country;
  }

  detail(){
    console.log(`${this.name} was born in ${this.country}`);
  }
}

export class TennisPlayer extends Player{
  constructor(Name, Country,Age){
    super(Name, Country);
    this.age= Age;
  }

  tennisdetail(){
    console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`)
  }
}