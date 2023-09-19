// Create an empty array called people
// Add three people to the `people` array. Each person should be represented as an object with the following properties: `name` (a string), `age` (a number), and `city` (a string).
let people = [
    {
        name: "Lucia",
        age: 26,
        city: "Bern"
    },

    {
        name: "Mariana",
        age: 29,
        city: "Lausanne"
    },

    {
        name: "Jeanne",
        age: 32,
        city: "Luzern"
    }
];

//  Use a for loop to iterate through the `people` array and log each person's information. 

for (person in people) {
    console.log (people[person])
}

// Show the ages

for (person in people) {
    console.log (people[person].age)
}

// Increase the age of each person in the `people` array by 5 years

for (person in people) {
    console.log (people[person].age + 5)
}

// Create an empty array called `peopleInCity`.
// Use a for loop to iterate through the `people` array and add people to the `peopleInCity` array if they live in a specific city of your choice (e.g., "New York").
//Only add people from that city to the new array.

const peopleInCity = [];

for (person in people) {
    if (people[person].city === "Luzern") {
        peopleInCity.push(people[person]);
    }
}

const personInCity = []

for (person in people) {
    let updated_name = people[person].name +" "+ people[person].city;
    personInCity.push (updated_name);
}

console.log (personInCity);

let totalAge = 0;

for (let person of people) {
    totalAge += person.age;
}

const averageAge  = totalAge / people.length;
console.log ("Average age", averageAge)