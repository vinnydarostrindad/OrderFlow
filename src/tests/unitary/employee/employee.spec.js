import Employee from "../../../domain/entities/employee.js";
import MissingParamError from "../../../utils/errors/missing-param-error.js";

describe("Employee Entity", () => {
  test("Should throw if no props are provided", () => {
    expect(() => new Employee()).toThrow(new MissingParamError("id"));
  });

  test("Should throw if no id is provided", () => {
    const props = {
      businessId: "any_business_id",
      name: "any_name",
      hashedPassword: "any_hash",
      role: "any_role",
    };
    expect(() => new Employee(props)).toThrow(new MissingParamError("id"));
  });

  test("Should throw if no buisness_id is provided", () => {
    const props = {
      id: "any_id",
      name: "any_name",
      hashedPassword: "any_hash",
      role: "any_role",
    };
    expect(() => new Employee(props)).toThrow(
      new MissingParamError("businessId"),
    );
  });

  test("Should throw if no name is provided", () => {
    const props = {
      id: "any_id",
      businessId: "any_business_id",
      hashedPassword: "any_hash",
      role: "any_role",
    };
    expect(() => new Employee(props)).toThrow(new MissingParamError("name"));
  });

  test("Should throw if no hashedPassword is provided", () => {
    const props = {
      id: "any_id",
      businessId: "any_business_id",
      name: "any_name",
      role: "any_role",
    };
    expect(() => new Employee(props)).toThrow(
      new MissingParamError("hashedPassword"),
    );
  });
  test("Should throw if no role is provided", () => {
    const props = {
      id: "any_id",
      businessId: "any_business_id",
      name: "any_name",
      hashedPassword: "any_hash",
    };
    expect(() => new Employee(props)).toThrow(new MissingParamError("role"));
  });

  test("Should return employee", () => {
    const props = {
      id: "any_id",
      businessId: "any_business_id",
      name: "any_name",
      hashedPassword: "any_hash",
      role: "any_role",
    };
    const employee = new Employee(props);
    expect(employee).toEqual({
      id: "any_id",
      businessId: "any_business_id",
      name: "any_name",
      hashedPassword: "any_hash",
      role: "any_role",
    });
  });
});
