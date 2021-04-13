const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const example = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(example.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const example = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(example.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const example = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(example.getGithub()).toBe(testValue);
});