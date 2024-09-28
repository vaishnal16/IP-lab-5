class SquareIterator {
  constructor(numbers) {
    this.numbers = numbers;
    this.index = 0;
  }

  next() {
    if (this.index < this.numbers.length) {
      const number = this.numbers[this.index];
      this.index++;
      return { value: number * number, done: false };
    } else {
      return { done: true };
    }
  }

  [Symbol.iterator]() {
    return this;
  }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squareIterator = new SquareIterator(numbers);

// Using the iterator manually
console.log(squareIterator.next().value); // 1
console.log(squareIterator.next().value); // 4
console.log(squareIterator.next().value); // 9

// Using the iterator in a for...of loop
for (const square of new SquareIterator(numbers)) {
  console.log(square);
}

// Using the spread operator
console.log([...new SquareIterator(numbers)]);
