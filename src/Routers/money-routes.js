const { Router } = require("express");
const Money = require("../Service/money-service");

const moneyRouter = Router({ mergeParams: true });

moneyRouter
    .route("/", )
    .get((req, res) => {
        console.log("aaa");
        Money.getAllType().then((data) => {
            res.json(data);
        });
    })
    .post((req, res) => {
        console.log(req.body.money);
        console.log(req.body.typeChange);
        Money.changer(req.body.money, req.body.typeChange).then((data) => {
            res.json(data);
        });
    });

module.exports = moneyRouter;