import React from 'react'
import emailjs from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"
import './Contact.min.css'

function fadingPrompt(element) {
    setTimeout(()=>{element.style.display = "none";}, 5000)
}

function sendEmail(e) {
    const messagePrompt = document.getElementById("prompt");

    e.preventDefault();

        emailjs.sendForm('service_eyq9nwt', 'template_wyq4uts', e.target, 'user_SKU0Xf6dne5jWbyJn0ECv')
        .then((result) => {
            console.log(result.text);
            messagePrompt.innerText = "Message has been sent successfully";
            messagePrompt.style.display = "block";
            e.target.reset();
            fadingPrompt(messagePrompt);
        }, (error) => {
            console.log(error.text);
            messagePrompt.innerText = "Some errors occurs. Did you check the reCaptcha ?";
            messagePrompt.style.display = "block";
            fadingPrompt(messagePrompt);
        });        
}

function Contact() {
    return (
        <div id="contact-container">
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div className="form-container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <h1>Contact Me</h1>
                    <label>Email</label>
                    <input type="email" name="user_email" className="input-style"/>
                    <label>Subject</label>
                    <input type="text" name="subject" className="input-style"/>
                    <label>Message</label>
                    <textarea name="message" rows="10" className="textarea-style"/>
                    <div className="recaptcha">
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            theme="dark"
                        />
                    </div>
                    <input type="submit" value="Send" className="btn-submit"/>             
                </form>
            </div>
            

            <div className="sns">
                <h1>Add me on</h1>
                <a href="https://www.linkedin.com/in/dai-cao/" target="_blank" rel="noreferrer"><img src="img/linkedin.png" alt="" /></a>
            </div>
    
            <div id="prompt">
                
            </div>
        </div>
    );
}

export default Contact
