const claimService = require("../../src/services/claimService");

describe("Claim Service", () => {
  beforeEach(() => {
    claimService._reset();
  });

  test("should create a valid claim", () => {
    const claim = claimService.createClaim({
      customerId: "CU001",
      policyId: "P1001",
      amount: 250000
    });

    expect(claim.id).toBe("C1001");
    expect(claim.status).toBe("Pending");
  });

  test("should reject negative claim amount", () => {
    expect(() => {
      claimService.createClaim({
        customerId: "CU001",
        policyId: "P1001",
        amount: -100
      });
    }).toThrow("Claim amount must be greater than zero");
  });

  test("should settle claim within policy coverage", () => {
    const claim = claimService.createClaim({
      customerId: "CU001",
      policyId: "P1001",
      amount: 500000
    });

    const result = claimService.settleClaim(claim.id);

    expect(result.claim.status).toBe("Settled");
    expect(result.claim.settlementAmount).toBe(500000);
  });

  test("should cap settlement at policy coverage", () => {
    const claim = claimService.createClaim({
      customerId: "CU001",
      policyId: "P1001",
      amount: 1500000
    });

    const result = claimService.settleClaim(claim.id);

    expect(result.claim.settlementAmount).toBe(1000000);
  });
});
