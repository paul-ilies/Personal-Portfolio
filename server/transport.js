const nodemailer = require("nodemailer");
const { google } = require("googleapis")


const nodemailerData = async (req, res, next) => {
    let data = req.body;
    const oAuth2Client = new google.auth.OAuth2(
        process.env.OAUTH_CLIENTID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI
    )
    oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN })

    let transport = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            type: 'OAuth2',
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