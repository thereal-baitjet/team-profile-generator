const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const example = new Manager("Foo", 1, "test@test.com", testValue);
  expect(example.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const example = new Manager("Foo", 1, "test@test.com", 100);
  expect(example.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const example = new Manager("Foo", 1, "test@test.com", testValue);
  expect(example.getOfficeNumber()).toBe(testValue);
});