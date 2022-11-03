/* 
👉 Write your kata here!
Write a function that converts KG into st and lbs.
This will be rounded to the nearest lb.
e.g. 80KG => "12st, 8lb".
You will need to validate that the input is a positive integer.
The output must be formatted as follows: "8st, 6lb".
*/

//👉 Write the function your CodeWarriors will start with below here:
export function convertWeight(kg) {
  // Code goes here!
  let weightStones = kg * 0.1574;
  let weightStonesRounded = Math.floor(kg * 0.1574);
  console.log(weightStones);
  console.log(weightStonesRounded);
  let weightLbs = Math.round((weightStones - Math.floor(weightStones)) * 14);
  console.log(weightLbs);
  console.log(`${weightStonesRounded}st, ${weightLbs}lb`);
  return `${weightStonesRounded}st, ${weightLbs}lb`;
}

convertWeight(80);
