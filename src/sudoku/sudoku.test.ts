import * as Sudoku from "./sudoku";

test("Returns true on valid sudoku", () => {
  expect(() =>
    Sudoku.isValid(
      `
            123456789
            456789123
            789123456
            234567891
            567891234
            891234567
            345678912
            678912345
            912345678
        `
    )
  ).toThrowError();
});

test("Throws error on invalid input format", () => {
  expect(() => Sudoku.isValid("invalid sudoku")).toThrowError();
});

test("Returns false if there is an empty spaces", () => {
  expect(() =>
    Sudoku.isValid(
      `
            123456789
            456789123
            789123456
            23456 891
            567891234
            891234567
            345678912
            678912345
            912345678
        `
    )
  ).toThrowError();
});

test("Returns false if there is a duplicate in a row/column", () => {
  expect(() =>
    Sudoku.isValid(
      `
            123456789
            436789123
            789123456
            234567891
            567891234
            891234567
            345678912
            678912345
            912345678
        `
    )
  ).toThrowError();
});

test("Returns false if there is a duplicate in a square", () => {
  expect(() =>
    Sudoku.isValid(
      `
            123456789
            789123456
            234567891
            567891234
            891234567
            345678912
            678912345
            912345678
            436789123
        `
    )
  ).toThrowError();
});
