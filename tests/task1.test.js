const { calculateAndSortSales, projectObject } = require("../src/task1");

test("daysTo method calculates days correctly", () => {
  const d1 = new Date("2023-12-10");
  const d2 = new Date("2023-12-15");
  expect(d1.daysTo(d2)).toBe(5);
});

test("calculateAndSortSales sorts by Total", () => {
  const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 20 },
    { amount: 2000, quantity: 5 },
  ];
  const sorted = calculateAndSortSales(sales);
  expect(sorted[0].Total).toBe(100000);
});

test("projectObject creates projected object", () => {
  const src = { prop1: { prop2: 2 }, prop3: 3 };
  const proto = { prop1: { prop2: null } };
  const result = projectObject(src, proto);
  expect(result).toEqual({ prop1: { prop2: 2 } });
});
