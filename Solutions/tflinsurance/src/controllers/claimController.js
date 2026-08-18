const claimService = require("../services/claimService");

exports.createClaim = (req, res, next) => {
  try {
    const claim = claimService.createClaim(req.body);

    res.status(201).json(claim);
  } catch (error) {
    next(error);
  }
};

exports.settleClaim = (req, res, next) => {
  try {
    const result = claimService.settleClaim(req.params.id);

    res.json(result);
  } catch (error) {
    next(error);
  }
};
