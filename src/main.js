const express = require("express");
const path = require("path");

const router = require("./Routers");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "web")));

app.use("/api", router);

// app.listen(port, () => {
//     console.log("http://localhost:" + port);
// });
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});