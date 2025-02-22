# Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript bug related to null value handling within a simple addition function. The function `foo` is intended to add two numbers, however it incorrectly returns `null` if either input is `null`, even if the other input is a valid number.  The solution demonstrates the correct approach to handle such situations.

## Bug

The `bug.js` file contains the erroneous code that needs fixing.  The function fails to correctly handle cases where only one argument is `null`. 

## Solution

The `bugSolution.js` file shows the corrected function handling. The solution checks each input separately and returns the other number if one is null. If both are null, it returns null. 