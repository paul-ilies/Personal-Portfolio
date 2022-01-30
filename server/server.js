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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// authentificate reslve contact form with nodemailer
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// end



app.post("/send", nodemailerData);
app.get("/projects", fetchProjects)

//prepare for deploy

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "front-end", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "front-end", "build", "index.html"))
    })
}
else {
    app.get("/", (req, res) => {
        res.send("API is running")
    })
}

// end deploy

app.listen(5000, () => {
    console.log("server is running")
})