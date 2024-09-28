const calculator = (num1, num2, operation) => {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject('Invalid input: Both inputs must be numbers');
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operation) {
      case '+':
        resolve(num1 + num2);
        break;
      case '-':
        resolve(num1 - num2);
        break;
      case '*':
        resolve(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          reject('Division by zero is not allowed');
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject('Invalid operation');
    }
  });
};

const getUserInput = () => {
  const num1 = prompt('Enter the first number:');
  const num2 = prompt('Enter the second number:');
  const operation = prompt('Enter the operation (+, -, *, /):');

  calculator(num1, num2, operation)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
};

// Call this function to start the calculator
getUserInput();
