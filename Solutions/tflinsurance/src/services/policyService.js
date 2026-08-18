let policies = [
  {
    id: "P1001",
    name: "Family Health Plus",
    type: "Health",
    coverage: 1000000,
    premium: 25000,
    active: true
  },
  {
    id: "P1002",
    name: "Life Secure",
    type: "Life",
    coverage: 2000000,
    premium: 30000,
    active: true
  }
];

exports.getAllPolicies = () => {
  return policies;
};

exports.getPolicyById = (id) => {
  return policies.find(policy => policy.id === id);
};

exports.purchasePolicy = ({ customerId, policyId }) => {
  if (!customerId) {
    const error = new Error("customerId is required");
    error.status = 400;
    throw error;
  }

  const policy = exports.getPolicyById(policyId);

  if (!policy) {
    const error = new Error("Policy does not exist");
    error.status = 404;
    throw error;
  }

  if (!policy.active) {
    const error = new Error("Policy is not available");
    error.status = 400;
    throw error;
  }

  return {
    message: "Policy purchased successfully",
    customerId,
    policyId: policy.id,
    policyName: policy.name,
    premium: policy.premium,
    coverage: policy.coverage,
    status: "Active"
  };
};
