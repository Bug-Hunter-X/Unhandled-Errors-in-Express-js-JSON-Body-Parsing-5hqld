# Unhandled Errors in Express.js JSON Body Parsing

This repository demonstrates a common error in Express.js applications:  failure to properly handle potential errors when parsing JSON request bodies.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version.

## Problem

The original code attempts to access properties of `req.body` without checking if the body exists or contains the expected properties. This can lead to crashes or unexpected behavior if the client sends a malformed request or no request body.

## Solution

The solution involves adding robust error handling to check for the existence and validity of `req.body` before accessing its properties. This prevents the application from crashing and allows for graceful handling of invalid requests.