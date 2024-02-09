import React from 'react'
import bannerImage from '../assets/questionMark.jpg'
import "../styles/Contact.css"
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  emailjs.sendForm('service_3m335f4', 'template_bove7vk', e.target, 'AXt2C4-uxos5B3dfG')
    .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
        console.log(error.text);
    });
}

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage:  `url(${bannerImage})` }}></div>
      <div className="rightSide">
        <h1>Email me!</h1>

        <form id="contactForm" method="POST" onSubmit={sendEmail}>
            <label htmlFor="from_name">Name </label>
            <input name="from_name" email="from_name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input email="email" name="email" placeholder="Enter your email..." type="text" />
            <label htmlFor="message" required>Message </label>
            <textarea rows="6" placeholder="Enter your message" name="message" required></textarea>
            <button type="submit" value="Send">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
