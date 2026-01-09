import { add, multiply, greet } from "./index";

describe("pkg-a", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative numbers", () => {
      expect(add(-1, -1)).toBe(-2);
    });

    test("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test("multiplies by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test("multiplies negative numbers", () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe("greet", () => {
    test("greets with a name", () => {
      expect(greet("World")).toBe("Hello, World!");
    });

    test("greets with an empty string", () => {
      expect(greet("")).toBe("Hello, !");
    });
  });
});
