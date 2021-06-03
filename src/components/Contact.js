import React, { useState, useEffect, useContext } from 'react'
import emailjs from 'emailjs-com'
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


    useEffect(() => {
        if(language === "fr-fr") {
            setTitle1Label("Me contacter");
            setTitle2Label("Ajoutez-moi sur");
        }
        else if(language === "ja") {
            setTitle1Label("お問合せはこちら");
            setTitle2Label("つながってください");
        }
        else if(language === "en-us") {
            setTitle1Label("Contact Me");
            setTitle2Label("Add Me On");
        }
        else {
            setTitle1Label("Contact Me");
            setTitle2Label("Add Me On");
        }
    }, [language])
    

    return (
        <div id="contact-container">
            <div className="form-container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <h1>{title1Label}</h1>
                    <p className="email-address">dai.cao1404[at]gmail.com</p>   
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
