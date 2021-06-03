import React, { useState, useEffect, useContext } from 'react'
import emailjs from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"
import './Contact.min.css'
import { LanguageContext } from '../contexts/LanguageContext';

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
    /* Setting the language */
    const {language} = useContext(LanguageContext);

    /* Setting the labels */
    const [title1Label, setTitle1Label] = useState("Contact Me");
    const [title2Label, setTitle2Label] = useState("Add Me On");
    const [emailLabel, setEmailLabel ] = useState("Email");
    const [subjectLabel, setSubjectLabel] = useState("Subject");
    const [messageLabel, setMessageLabel] = useState("Message");
    const [buttonLabel, setButtonLabel] = useState("Send");

    useEffect(() => {
        if(language === "fr-fr") {
            setTitle1Label("Me contacter");
            setTitle2Label("Ajoutez-moi sur");
            setEmailLabel("Votre Email");
            setSubjectLabel("Sujet");
            setMessageLabel("Votre Message");
            setButtonLabel("Envoyez")
        }
        else if(language === "ja") {
            setTitle1Label("お問合せください");
            setTitle2Label("つながってください");
            setEmailLabel("メール");
            setSubjectLabel("件名");
            setMessageLabel("メッセージ");
            setButtonLabel("送信");
        }
        else if(language === "en-us") {
            setTitle1Label("Contact Me");
            setTitle2Label("Add Me On");
            setEmailLabel("Email");
            setSubjectLabel("Subject");
            setMessageLabel("Message");
            setButtonLabel("Send");
        }
        else {
            setTitle1Label("Contact Me");
            setTitle2Label("Add Me On");
            setEmailLabel("Email");
            setSubjectLabel("Subject");
            setMessageLabel("Message");
            setButtonLabel("Send");
        }
    }, [language])
    

    return (
        <div id="contact-container">
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div className="form-container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <h1>{title1Label}</h1>
                    <label>{emailLabel}</label>
                    <input type="email" name="user_email" className="input-style"/>
                    <label>{subjectLabel}</label>
                    <input type="text" name="subject" className="input-style"/>
                    <label>{messageLabel}</label>
                    <textarea name="message" rows="10" className="textarea-style"/>
                    <div className="recaptcha">
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            theme="dark"
                        />
                    </div>
                    <input type="submit" value={buttonLabel} className="btn-submit"/>             
                </form>
            </div>
            

            <div className="sns">
                <h1>{title2Label}</h1>
                <a href="https://www.linkedin.com/in/dai-cao/" target="_blank" rel="noreferrer"><img src="img/linkedin.png" alt="" /></a>
            </div>
    
            <div id="prompt">
                
            </div>
        </div>
    );
}

export default Contact
