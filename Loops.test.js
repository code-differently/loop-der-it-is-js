const { TestScheduler } = require('jest');
const Loops = require('./Loops');
test("test for one to ten", () => {
  //Given
  let loops = new Loops();
  let expected = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";
  //When
  let actual = loops.oneToTen();
  //Then
  expect(actual).toEqual(expected)
})

test("test for squared numbers", () => {
  // Given
  let loops = new Loops();
  let expected = "1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n";
  // When
  let actual = loops.loopsSquared();
  // Then
  expect(actual).toEqual(expected);
})

test("test for even under", () => {
  // Given
  let loops = new Loops();
  let expected = "2\n4\n6\n8\n10\n12\n14\n16\n18\n";
  // When
  let actual = loops.evenUnder(20);
  // Then
  expect(actual).toEqual(expected);
})

test("Test for sum of numbers from n to m", () => {
  // Given
  const loops = new Loops();
  const expected = 35;

  // When
  const actual = loops.getSum(5, 10);

  // Then
  expect(actual).toEqual(expected);
})

// Can't test this because prompt() doesn't work with jest.
// test("Test are we there yet", () => {
//   // Given
//   const loops = new Loops();
//   const expected = "Good!";

//   // When
//   const actual = loops.areWeThereYet();

//   // Then
//   expect(actual).toEqual(expected);
// })

test("Test that a triangle was made", () => {
  // Given
  const loops = new Loops();

  // When
  const expected = "*\n**\n***\n****\n*****\n"
  const actual = loops.makeTriangle(5);

  // Then
  expect(actual).toEqual(expected);
})