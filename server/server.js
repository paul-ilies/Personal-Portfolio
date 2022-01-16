const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { nodemailerData } = require("./transport")
const app = express();
dotenv.config()

console.log(process.env)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World")
})

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.post("/send", nodemailerData)

app.listen(5000, () => {
    console.log("server is running")
})