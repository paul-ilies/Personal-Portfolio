const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv")
const path = require("path")
const { nodemailerData } = require("./transport")
const { fetchProjects } = require("./projectSeeder")
const app = express();

//solution for dotenv file not recognized
dotenv.config({ path: path.resolve(__dirname, "./.env") })
//end solution

console.log(process.env.HOST)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


app.use("/", express.static("/front-end/build"))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/front-end/build/index.html"))
})

app.post("/send", nodemailerData);
app.get("/projects", fetchProjects)



app.listen(5000, () => {
    console.log("server is running")
})