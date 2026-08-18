const policyService = require("../services/policyService");

exports.getAllPolicies = (req, res, next) => {
  try {
    const policies = policyService.getAllPolicies();
    res.json(policies);
  } catch (error) {
    next(error);
  }
};

exports.getPolicyById = (req, res, next) => {
  try {
    const policy = policyService.getPolicyById(req.params.id);

    if (!policy) {
      return res.status(404).json({
        message: "Policy not found"
      });
    }

    res.json(policy);
  } catch (error) {
    next(error);
  }
};

exports.purchasePolicy = (req, res, next) => {
  try {
    const policy = policyService.purchasePolicy(req.body);

    res.status(201).json(policy);
  } catch (error) {
    next(error);
  }
};
