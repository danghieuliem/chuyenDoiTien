const { Router } = require("express");
const moneyRouter = require("./money-routes");

const router = Router({ mergeParams: true });

router.use("/money", moneyRouter);

module.exports = router;