const nodemailer = require("nodemailer");


const nodemailerData = async (req, res, next) => {
    let data = req.body;

    let transport = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }

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

    await transport.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ msg: "fail" });
        }
        else { res.json({ msg: "success" }) }
    })

}

module.exports = { nodemailerData }