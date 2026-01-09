/**
 * Example application code that uses pkg-a
 */

import { add, greet } from "pkg-a";

export function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => add(sum, item), 0);
}

export function welcomeUser(username: string): string {
  const greeting = greet(username);
  return `${greeting} Welcome to App A!`;
}

export function processOrder(itemPrices: number[], customerName: string): {
  customer: string;
  total: number;
  message: string;
} {
  const total = calculateTotal(itemPrices);
  const message = welcomeUser(customerName);

  return {
    customer: customerName,
    total,
    message,
  };
}
