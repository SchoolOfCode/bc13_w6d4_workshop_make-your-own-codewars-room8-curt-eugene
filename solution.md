//👉 Write the function your CodeWarriors will start with below here:
export function convertWeight(kg) {
  // Code goes here!
  if (kg < 0 || typeof kg !== "number") {
    return "Make sure your number is a positive integer"
  } else {
  let weightStones = kg * 0.1574;
  let weightStonesRounded = Math.floor(kg * 0.1574);
  console.log(weightStones);
  console.log(weightStonesRounded);
  let weightLbs = Math.round((weightStones - Math.floor(weightStones)) * 14);
  console.log(weightLbs);
  console.log(`${weightStonesRounded}st, ${weightLbs}lb`);
  return `${weightStonesRounded}st, ${weightLbs}lb`;
  }
}