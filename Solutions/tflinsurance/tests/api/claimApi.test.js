const request = require("supertest");
const app = require("../../src/app");
const claimService = require("../../src/services/claimService");

describe("Claim REST API", () => {
  beforeEach(() => {
    claimService._reset();
  });

  test("POST /api/claims should create claim", async () => {
    const response = await request(app)
      .post("/api/claims")
      .send({
        customerId: "CU001",
        policyId: "P1001",
        amount: 400000
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("Pending");
  });

  test("POST /api/claims/:id/settle should settle claim", async () => {
    const createResponse = await request(app)
      .post("/api/claims")
      .send({
        customerId: "CU001",
        policyId: "P1001",
        amount: 400000
      });

    const claimId = createResponse.body.id;

    const settleResponse = await request(app)
      .post(`/api/claims/${claimId}/settle`);

    expect(settleResponse.statusCode).toBe(200);
    expect(settleResponse.body.claim.status).toBe("Settled");
    expect(settleResponse.body.claim.settlementAmount).toBe(400000);
  });
});
