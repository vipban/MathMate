/**
 * Function to calculate the prime factorization of a number
 * @param {number} n - The number to factorize
 * @returns {Object} An object with prime factors as keys and their exponents as values
 */
function primeFactorization(n) {
    if (n < 1) {
        throw new Error("Input must be a positive integer.");
    }

    let factors = {};
    let divisor = 2;

    while (n > 1) {
        while (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n = Math.floor(n / divisor);
        }
        divisor++;
    }

    return factors;
}

/**
 * Function to calculate the LCM of a number using its prime factorization
 * @param {Object} factors - Prime factors with their exponents
 * @returns {number} The LCM of the number
 */
function calculateLCM(factors) {
    let lcm = 1;

    for (let prime in factors) {
        lcm *= Math.pow(parseInt(prime), factors[prime]);
    }

    return lcm;
}

/**
 * Function to calculate the factorial of a number
 * @param {number} n - The number to compute factorial
 * @returns {number} The factorial of the number
 */
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Function to calculate the Greatest Common Divisor (GCD) of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The GCD of a and b
 */
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

/**
 * Function to calculate the sum of digits of a number
 * @param {number} n - The number to calculate digit sum
 * @returns {number} The sum of the digits
 */
function sumOfDigits(n) {
    return String(n)
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

/**
 * Function to check if a number is a perfect square
 * @param {number} n - The number to check
 * @returns {boolean} True if the number is a perfect square, false otherwise
 */
function isPerfectSquare(n) {
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

// DOM interaction
document.getElementById("calculateButton").addEventListener("click", () => {
    const input = document.getElementById("numberInput").value;

    if (!input || input <= 0) {
        alert("Please enter a valid positive integer.");
        return;
    }

    const number = Number(input);

    try {
        const primeFactors = primeFactorization(number);
        const lcm = calculateLCM(primeFactors);
        const fact = factorial(number);
        const digitSum = sumOfDigits(number);
        const perfectSquare = isPerfectSquare(number);

        document.getElementById("primeFactorsResult").textContent =
            `Prime Factorization: ${JSON.stringify(primeFactors)}`;
        document.getElementById("lcmResult").textContent =
            `LCM: ${lcm}`;
        document.getElementById("factorialResult").textContent =
            `Factorial: ${fact}`;
        document.getElementById("digitSumResult").textContent =
            `Sum of Digits: ${digitSum}`;
        document.getElementById("perfectSquareResult").textContent =
            `Is Perfect Square: ${perfectSquare}`;
    } catch (error) {
        alert(error.message);
    }
});