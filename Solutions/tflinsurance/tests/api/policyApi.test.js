const request = require("supertest");
const app = require("../../src/app");

describe("Policy REST API", () => {
  test("GET /api/policies should return policies", async () => {
    const response = await request(app)
      .get("/api/policies");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /api/policies/P1001 should return a policy", async () => {
    const response = await request(app)
      .get("/api/policies/P1001");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe("P1001");
  });

  test("POST /api/policies/purchase should purchase policy", async () => {
    const response = await request(app)
      .post("/api/policies/purchase")
      .send({
        customerId: "CU001",
        policyId: "P1001"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("Active");
  });

  test("POST /api/policies/purchase should validate customer", async () => {
    const response = await request(app)
      .post("/api/policies/purchase")
      .send({
        policyId: "P1001"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("customerId is required");
  });
});
