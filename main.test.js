import { convertWeight } from "./main";
import { expect, test } from "@jest/globals";
//👉 Write your tests below here:

test.each([
  { a: 80, expected: "12st, 8lb" },
  { a: 101, expected: "15st, 13lb" },
  { a: 12.5, expected: "2st, 0lb" },
  { a: 34.6, expected: "5st, 6lb" },
])("Is the function outputting the correct string", ({ a, expected }) => {
  const actual = convertWeight(a);
  expect(actual).toEqual(expected);
});

test("Make sure the argument is positive", () => {
  const actual = convertWeight(-5);
  const expected = "Make sure your number is a positive integer";
  expect(actual).toEqual(expected);
});
