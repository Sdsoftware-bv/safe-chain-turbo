import { calculateTotal, welcomeUser, processOrder } from "./main";

describe("app-a", () => {
  describe("calculateTotal", () => {
    test("calculates total of multiple items", () => {
      expect(calculateTotal([10, 20, 30])).toBe(60);
    });

    test("returns 0 for empty array", () => {
      expect(calculateTotal([])).toBe(0);
    });

    test("handles single item", () => {
      expect(calculateTotal([42])).toBe(42);
    });
  });

  describe("welcomeUser", () => {
    test("creates welcome message", () => {
      expect(welcomeUser("Alice")).toBe("Hello, Alice! Welcome to App A!");
    });

    test("handles empty username", () => {
      expect(welcomeUser("")).toBe("Hello, ! Welcome to App A!");
    });
  });

  describe("processOrder", () => {
    test("processes complete order", () => {
      const result = processOrder([10, 20, 30], "Bob");

      expect(result).toEqual({
        customer: "Bob",
        total: 60,
        message: "Hello, Bob! Welcome to App A!",
      });
    });

    test("processes order with no items", () => {
      const result = processOrder([], "Charlie");

      expect(result).toEqual({
        customer: "Charlie",
        total: 0,
        message: "Hello, Charlie! Welcome to App A!",
      });
    });
  });
});
