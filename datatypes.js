// Primitive
// => Datatypes are call by value
// 7 type : string , Number, Boolean ,null ,undefined, symbol, BigInt



const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const heroes = ["batman", "ironman" ,"Scarlet"]

let myObj = {
    name: "Dewang",
    age : 22,
    phone : 23465432,
}

console.log(myObj);


// Reference type (Non Primitive)
// => Arrays, Objects, Function



//***********************************/

const myfunction  = function() {
    console.log("helo World")
}

console.log(typeof myfunction);



// How Memory Work
// Types of Memory: stack & Heap

// stack => Primitve
// Heap => Non Primitive
