const Employee = require("../lib/employee.js");

test("Can instantiate Employee instance", () => {
    const example = new Employee();
    expect(typeof(example)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const example = new Employee(name);
    expect(example.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const example = new Employee("Foo", testValue);
    expect(example.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const example = new Employee("Foo", 1, testValue);
    expect(example.email).toBe(testValue);
  });
  
  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const example = new Employee(testValue);
    expect(example.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const example = new Employee("Foo", testValue);
    expect(example.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const example = new Employee("Foo", 1, testValue);
    expect(example.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const example = new Employee("Alice", 1, "test@test.com");
    expect(example.getRole()).toBe(testValue);
  });