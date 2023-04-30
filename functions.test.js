import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

test("capitalizes sam to equal Sam", () => {
  expect(capitalize("sam")).toBe("Sam");
});

test("reverses sam to equal mas", () => {
  expect(reverseString("sam")).toBe("mas");
});

test("add 123 and 321 to equal 444", () => {
  expect(calculator.add(123, 321)).toBe(444);
});
test("subtract 321 from 123 to equal -198", () => {
  expect(calculator.subtract(123, 321)).toBe(-198);
});
test("divide 123 by 321 to equal 0.3831...", () => {
  expect(calculator.divide(123, 321)).toEqual(0.38317757009345793);
});
test("multiply 123 by 321 to equal 39483", () => {
  expect(calculator.multiply(123, 321)).toBe(39483);
});

test("offset characters in sam by 2 to equal uco", () => {
  expect(caesarCipher("sam", 2)).toBe("uco");
});

test("analyze array and return { average: 62.9, min: 12, max: 129, length: 5 }", () => {
  expect(analyzeArray([24, 12, 85, 64, 129])).toEqual({
    average: 62.8,
    min: 12,
    max: 129,
    length: 5,
  });
});
