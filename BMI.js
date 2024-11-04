/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
  /**
   *  Write your code here 👇🏼
   */
  height /= 100;
  const BMI = weight / (height ** 2);

  /**
   * Stop making changes here!
   */
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState;
  if (BMI < 18.5) BMIState = "underweight";
  else if (BMI < 24.9) BMIState = "healthy";
  else if (BMI < 29.9) BMIState = "overweight";
  else BMIState = "obese";
  /**
   * Stop making changes here!
   */
  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState = "not healthy";
  if (
    ((19 <= age && age <= 24) && (19 <= BMI && BMI <= 24)) ||
    ((25 <= age && age <= 34) && (20 <= BMI && BMI <= 25)) ||
    ((35 <= age && age <= 44) && (21 <= BMI && BMI <= 26)) ||
    ((45 <= age && age <= 54) && (22 <= BMI && BMI <= 27)) ||
    ((55 <= age && age <= 64) && (23 <= BMI && BMI <= 28)) ||
    ((65 <= age) && (24 <= BMI && BMI <= 29))
  ) {
    BMIState = "healthy";
  }
  /**
   * Stop making changes here!
   */
  return BMIState;
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
