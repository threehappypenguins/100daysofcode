// Import Chai assertion library
import { expect } from 'chai';

// Import the function to be tested
import { add, subtract } from './math.js';

// Test suite for the math functions
describe('Math Function', () => {
    // Test case for the add function
    it('should add two numbers correctly', () => {
        const result = add (2, 3);
        expect(result).to.equal(5);
    });

    // Test case for the subtract function
    it('should subtract two numbers correctly', () => {
        const result = subtract(5, 3);
        expect(result).to.equal(2);
    });
});