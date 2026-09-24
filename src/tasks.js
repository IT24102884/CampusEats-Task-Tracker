// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];
console.log(`CampusEats has ${tasks.length} open tasks`);

// ==========================================
// Task 06: Code Quality & Security Refactoring
// ==========================================

// AFTER — clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// Example usage demonstrating secure calculations
console.log(`VIP Order Total ($50 x 2 with discount): $${calculateTotal(50, 2, "vip")}`);
console.log(`Regular Order Total ($50 x 2): $${calculateTotal(50, 2, "regular")}`);

// The API key comes from an environment variable,
// e.g. process.env.API_KEY — never hard-coded in source files
const apiKey = process.env.API_KEY || "SECURE_ENV_FALLBACK";

module.exports = { tasks, calculateTotal, VIP_DISCOUNT };
