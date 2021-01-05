const express = require("express");
const path = require("path");

const router = require("./Routers");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "web")));

app.use("/api", router);

app.listen(port, () => {
    console.log("http://localhost:" + port);
});