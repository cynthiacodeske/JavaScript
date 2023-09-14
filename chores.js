//list of chores

let chores = ["cook", "clean", "groceries", "vacuum", "laundry", "sanitize", "gym", "write", "photography", "code", "event_plan", "write", "study", "mop", "declutter", "bills", "flights", "paint", "meal_prep", "garden"];

chores.push ("donate");
chores.unshift ("cut_grass");

let slice1 = chores.slice (0, 4)
let slice2 = chores.slice (16,20)

let mixed = []
mixed.push (slice1)
mixed.unshift (slice2)


console.log (chores);
console.log(slice1)
console.log(slice2)
console.log (mixed)
console.log (chores.length)
console.log (chores[chores.length - 1])


