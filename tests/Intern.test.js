
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Rutgers";
  const example = new Intern("Foo", 1, "test@test.com", testValue);
  expect(example.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const example = new Intern("Foo", 1, "test@test.com", "Rutgers");
  expect(example.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Rutgers";
  const example = new Intern("Foo", 1, "test@test.com", testValue);
  expect(example.getSchool()).toBe(testValue);
});