# JavaScript Bug: TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of undefined (reading 'length')`.  The error occurs when trying to access the `length` property of a variable that holds `undefined`.

## Bug Description

The provided JavaScript function `foo` attempts to access the `length` property of the input parameter `x`. If `x` is `null`, the function correctly returns 0. However, if `x` is `undefined`, a `TypeError` is thrown because `undefined` does not have a `length` property.

## Bug Reproduction

1. Clone this repository.
2. Run `bug.js` (e.g., using Node.js: `node bug.js`).
3. Observe the `TypeError` when calling `foo` with an undefined argument.

## Solution

The solution involves adding a check for `undefined` before accessing the `length` property.  This is demonstrated in `bugSolution.js`.

## How to run solution

1. Clone this repository.
2. Run `bugSolution.js` (e.g., using Node.js: `node bugSolution.js`).
3. The solution will handle undefined and null values correctly without throwing an error.