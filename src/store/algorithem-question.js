export function algoQuestion() {
  let numbers = [1, 2, 3, 8, 9, 3, 2, 1];
  let expectAns = 3;
  console.log(`input: ${numbers}, expect: ${expectAns}, result: ${maxMirror(numbers)} `);

  numbers = [1, 2, 1, 4];
  expectAns = 2;
  console.log(`input: ${numbers},expect: ${expectAns}, result: ${maxMirror(numbers)} `);

  numbers = [7, 1, 2, 9, 7, 2, 1];
  expectAns = 2;
  console.log(`input: ${numbers},expect: ${expectAns}, result: ${maxMirror(numbers)} `);
}

function maxMirror(numbers) {
  const len = numbers.length;
  let count = 0;
  let max = 0;

  for (let i = 0; i < len; ++i) {
    count = 0;
    for (let j = len - 1; j > 0 && i + count < len; --j) {
      if (numbers[i + count] === numbers[j]) {
        count++;
      } else {
        max = Math.max(count, max);
        count = 0;
      }
    }
    max = Math.max(count, max);
  }
  return max;
}
