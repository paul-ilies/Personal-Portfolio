import React, { useState } from 'react';
import axios from "axios";
import "./css/contact.css"

const Contact = () => {

    const [senter, setSenter] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")

    const resetData = () => {
        return (setSenter(""),
            setSubject(""),
            setEmail(""),
            setCompany(""),
            setMessage(""))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: "POST",
            url: "http://localhost:5000/send",
            data: {
                senter,
                subject,
                email,
                company,
                message
            }
        }).then((response) => {
            console.log(response)
            if (response.data.msg === 'success') {
                resetData()
                alert("Message Sent.");

            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })

    }





    return (
        <div className='contact' id="contact">
            <div className="contact-header">
                <h1>Let's Make Something <br /> Great Together</h1>
                <p>Have a question, or you want to work together?<br />Please fill the form and I will respond as soon as possible!</p>
            </div>
            <form action="submit" onSubmit={handleSubmit}  >
                <div className="inputs">
                    <input type="text" placeholder='Subject' name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <input type="text" placeholder='Name' name="senter" value={senter} onChange={(e) => setSenter(e.target.value)} />
                    <input type="email" placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Company' name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <textarea name="message" cols="30" rows="10" placeholder='Message Me'
                    value={message} onChange={(e) => setMessage(e.target.value)}

                ></textarea>
                <button className='form-button' type='submit' >Contact Me</button>
            </form>
        </div>
    )
}

export default Contact
