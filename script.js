// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid1 = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid1);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

/////////////////////////////////////////////


// Check three: no number larger than 25 (reversed logic, renamed)
const areAll25OrLess = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Check if all numbers are 25 or less: ${areAll25OrLess}`);

// Check five: all numbers divisible by 5
const areAllDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Check if all numbers are divisible by 5: ${areAllDivisibleBy5}`);

// Check six: first number larger than the last
const isFirstGreaterThanLast = n1 > n4;
console.log(`Check if the first number is greater than the last: ${isFirstGreaterThanLast}`);

// Arithmetic chain
// Step 1: Subtract n1 from n2
const step1 = n2 - n1;
// Step 2: Multiply result by n3
const step2 = step1 * n3;
// Step 3: Find remainder of result divided by n4
const finalResult = step2 % n4;
console.log(`Arithmetic chain result: ((n2 - n1) * n3) % n4 = (${n2} - ${n1}) * ${n3} % ${n4} = ${finalResult}`);

// Final validation
const isValid = isSum50 && isTwoOdd && areAll25OrLess && isUnique;
console.log(`The four numbers are valid according to the provided criteria: ${isValid}`);

////////////////  Part 2 : Practical Math ///////////////////

const tripDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars per gallon

// Efficiency data
const efficiencies = {
  55: 30,
  60: 28,
  75: 23
};

// Function to calculate trip details at a given speed
function calculateTrip(speed, mpg) {
  const gallonsNeeded = tripDistance / mpg;
  const fuelCost = gallonsNeeded * fuelCostPerGallon;
  const isBudgetEnough = fuelCost <= fuelBudget;
  const travelTime = tripDistance / speed;

  console.log(`\n=== At ${speed} MPH ===`);
  console.log(`Miles per gallon: ${mpg}`);
  console.log(`Gallons needed: ${gallonsNeeded.toFixed(2)} gal`);
  console.log(`Total fuel cost: $${fuelCost.toFixed(2)}`);
  console.log(`Is budget enough? ${isBudgetEnough ? "Yes" : "No"}`);
  console.log(`Estimated travel time: ${travelTime.toFixed(2)} hours`);
}

// Run calculations for each speed
for (const speed in efficiencies) {
  calculateTrip(Number(speed), efficiencies[speed]);
}

//******** */ Which Makes the Most Sense? //////////////////////
// 55 MPH: Most fuel-efficient and well within budget, but slowest.

// 60 MPH: Still within budget and a bit faster. A good balance.

// 75 MPH: Fastest, but over budget — not affordable with $175.

// ********* */ Conclusion /////////////////////////////////////
// If you care about budget and time, 60 MPH is the best compromise.
// If fuel cost is your top concern, go 55 MPH.
// Avoid 75 MPH unless you can increase your budget.


//////////////// Part 3 : Future Exploration ////////////////

// Speeds and fuel efficiencies
const speedOptions = [
  { speed: 55, mpg: 30 },
  { speed: 60, mpg: 28 },
  { speed: 75, mpg: 23 }
];

// Function to calculate trip stats
function calculateTrip(speed, mpg) {
  const gallonsNeeded = tripDistance / mpg;
  const fuelCost = gallonsNeeded * fuelCostPerGallon;
  const travelTime = tripDistance / speed;
  const isAffordable = fuelCost <= fuelBudget;

  return {
    speed,
    mpg,
    gallonsNeeded,
    fuelCost,
    travelTime,
    isAffordable
  };
}
// Analyze all speed options
let bestOption = null;

console.log("=== Trip Summary for Each Speed Option ===\n");

speedOptions.forEach(option => {
  const result = calculateTrip(option.speed, option.mpg);

  // results on console
  console.log(`Speed: ${result.speed} MPH`);
  console.log(`- MPG: ${result.mpg}`);
  console.log(`- Gallons needed: ${result.gallonsNeeded.toFixed(2)} gal`);
  console.log(`- Fuel cost: $${result.fuelCost.toFixed(2)}`);
  console.log(`- Travel time: ${result.travelTime.toFixed(2)} hours`);
  console.log(`- Within budget? ${result.isAffordable ? " Yes" : "No"}`);
  console.log('----------------------------------');

  // Find best option: prioritize affordability, then fastest
  if (result.isAffordable && (!bestOption || result.fuelCost < bestOption.fuelCost || (result.fuelCost === bestOption.fuelCost && result.travelTime < bestOption.travelTime))) {
  bestOption = result;
}
});

//////////////////***** */ Final Recommendation ////////////////////////
if (bestOption) {
  console.log(`\n Speed  Recommended : ${bestOption.speed} MPH`);
  console.log(`You will stay in budget ($${fuelBudget}) and complete your trip in ${bestOption.travelTime.toFixed(2)} hours.`);
} else {
  console.log("\n None of the speed options fit within the fuel budget of $175. Consider increasing your budget or optimizing fuel efficiency.");
}