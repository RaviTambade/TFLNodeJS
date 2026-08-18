const policyService = require("../../src/services/policyService");

describe("Policy Service", () => {
  test("should return all policies", () => {
    const policies = policyService.getAllPolicies();

    expect(policies.length).toBeGreaterThan(0);
  });

  test("should find policy by id", () => {
    const policy = policyService.getPolicyById("P1001");

    expect(policy).toBeDefined();
    expect(policy.name).toBe("Family Health Plus");
  });

  test("should purchase a valid policy", () => {
    const result = policyService.purchasePolicy({
      customerId: "CU001",
      policyId: "P1001"
    });

    expect(result.status).toBe("Active");
    expect(result.customerId).toBe("CU001");
  });

  test("should reject purchase when customerId is missing", () => {
    expect(() => {
      policyService.purchasePolicy({
        policyId: "P1001"
      });
    }).toThrow("customerId is required");
  });

  test("should reject unknown policy", () => {
    expect(() => {
      policyService.purchasePolicy({
        customerId: "CU001",
        policyId: "P9999"
      });
    }).toThrow("Policy does not exist");
  });
});
