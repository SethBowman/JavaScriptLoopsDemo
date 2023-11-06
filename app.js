// for loop
for(let i = 1; i <= 5; i++) {
    console.log(i)
}

console.log("--------")

//while loop

let whileNum = 2

while(whileNum <= 10) {
    console.log(whileNum)
    whileNum += 2
}

console.log("----------")

//do while

let doNum = 1
do {
    console.log(doNum)
    doNum++
} while(doNum <= 5)

console.log("----------")

//for of loop (array)

let numbers = [22, 304, 34, 5, 10, 21]

for(let number of numbers) {
    console.log(number)
}

console.log("----------")

//for in loop (array

for(let number in numbers) {
    console.log(number)
}

console.log("----------")

//for of loop (object)

const person = {
    name: "Seth",
    age: 29,
    city: "Bham"
}

console.log("for of Object.values:")

for(let prop of Object.values(person)) {
    console.log(prop)
}

console.log("----------")

console.log("for of Object.keys:")

for(let prop of Object.keys(person)) {
    console.log(prop)
}

console.log("----------")

//for in loop (object)

console.log("for in person[prop]:")

for(let prop in person) {
    console.log(person[prop])
}

console.log("for in prop:")

console.log("----------")

for(let prop in person) {
    console.log(prop)
}

