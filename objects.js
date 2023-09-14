let name = "John";

let names = ["John", "Jake"]; //list = array

//objects in JavaScript - objects are a set of key value pairs separated by a comma

let person = {
    name: "Jeff",
    age: 20,
    height: 1.65,
    occupation: "Software Developer",
    nationality: "Kenyan",
    family: {
        father: "Jacob",
        mother: "Janet",
        sisters: {
            sister1: "Jane",
            sister2: "July"
        }
    },
    hobbies: ["Swimming", "Racing", "Cooking"]
}

//write an object of cars

let car = {
    make: "Audi",
    model: "R8 Spyder V10 Performance quattro",
    year: 2023,
    price: 200000,
    features: {
        performance: 456,
        acceleration: 3.2,
        maxSpeed: 327,
        color: "white"
    }
}

//how to access an object

console.log (person.name) //dot notation
console.log (person["nationality"]) //using index

console.log (person.family.sisters.sister2) 

console.log (person.hobbies [0]) // access to an array/list

//list of objects

let countries = [
    {
        name: "Kenya",
        continent: "Africa",
        population: "50M"
    },
    {
        name: "India",
        continent: "Asia",
        population: "1.5B"
    },
    {
        name: "Switzerland",
        continent: "Europe",
        population: "8.5M"
    }
]

console.log (countries[0].population)

let person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log (person1.firstName + " " + person1.lastName);

let book = {
    title: "I know why the caged bird sings",
    author: "Maya Angelou",
    publishedYear: 1969,
    moreDetails: {
        genre: "Autobiography",
        mediaType: "Print",
        numberOfPages: 300
    },
    themes: {
        theme1: "racism",
        theme2: "rape",
        theme3: "identity"
    }
}