const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

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

app.post("/send", (req, res, next) => {
    let data = req.body;
    let transport = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    })

    transport.verify((error, success) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Server is ready to take messages")
        }
    })

    let mail = {
        from: data.senter,
        to: process.env.EMAIL,
        subject: data.subject,
        text: `
        From: ${data.senter}\n\n
        Subject: ${data.subject}\n\n
        Email: ${data.email}\n\n
        Company: ${data.company}\n\n
        Message: ${data.message}`
    }

    transport.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ msg: "fail" });
        }
        else { res.json({ msg: "success" }) }
    })




})

app.listen(5000, () => {
    console.log("server is running")
})