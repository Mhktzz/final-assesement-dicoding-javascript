import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("sum function", () => {
  it("Should sum correctly", () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 when string passed on numA parameter", () => {
    // Arrange
    const operandA = "3";
    const operandB = 7;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 when string passed on numB parameter", () => {
    // Arrange
    const operandA = 5;
    const operandB = "9";

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 when numA argument is below zero", () => {
    // Arrange
    const operandA = -1;
    const operandB = 4;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 when numB argument is below zero", () => {
    // Arrange
    const operandA = 5;
    const operandB = -9;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });
});
