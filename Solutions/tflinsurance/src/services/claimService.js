const policyService = require("./policyService");

let claims = [];

exports.createClaim = ({ customerId, policyId, amount }) => {
  if (!customerId || !policyId || amount === undefined) {
    const error = new Error("customerId, policyId and amount are required");
    error.status = 400;
    throw error;
  }

  if (amount <= 0) {
    const error = new Error("Claim amount must be greater than zero");
    error.status = 400;
    throw error;
  }

  const policy = policyService.getPolicyById(policyId);

  if (!policy) {
    const error = new Error("Policy not found");
    error.status = 404;
    throw error;
  }

  const claim = {
    id: `C${1000 + claims.length + 1}`,
    customerId,
    policyId,
    requestedAmount: amount,
    status: "Pending"
  };

  claims.push(claim);

  return claim;
};

exports.settleClaim = (claimId) => {
  const claim = claims.find(item => item.id === claimId);

  if (!claim) {
    const error = new Error("Claim not found");
    error.status = 404;
    throw error;
  }

  const policy = policyService.getPolicyById(claim.policyId);

  const settlementAmount = Math.min(
    claim.requestedAmount,
    policy.coverage
  );

  claim.status = "Settled";
  claim.settlementAmount = settlementAmount;

  return {
    message: "Claim settled successfully",
    claim
  };
};

// Exported only to make test setup/reset easy in this learning project.
exports._reset = () => {
  claims = [];
};
