import { validateAndPrepareTaskText } from "./taskUtils";

describe("validateAndPrepareTaskText", () => {
  it("should return null for empty string", () => {
    const result = validateAndPrepareTaskText("");
    expect(result).toBeNull();
  });

  it("should return null for whitespace only", () => {
    const result = validateAndPrepareTaskText("   ");
    expect(result).toBeNull();
  });

  it("should return null for tabs and newlines only", () => {
    const result = validateAndPrepareTaskText("\t\n  \t");
    expect(result).toBeNull();
  });

  it("should return trimmed text for valid input", () => {
    const result = validateAndPrepareTaskText("Buy milk");
    expect(result).toBe("Buy milk");
  });

  it("should trim leading and trailing whitespace", () => {
    const result = validateAndPrepareTaskText("  Buy milk  ");
    expect(result).toBe("Buy milk");
  });
});
