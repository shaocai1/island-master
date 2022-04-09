import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  //const [showPopUp, setShowPopUp] = useState(false);

  const sendmail = (e) => {
    e.preventDefault();

    var templateParams = {
      name: name,
      email: email,
      message: message,
    };
    try {
      emailjs
        .send(
          "service_58jnlbv",
          "template_qa65l9j",
          templateParams,
          "Z77ZjsbbOexxbQSW2"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setEmail("");
            setName("");
            setMessage("");
            // setShowPopUp(true);
            alert("Message has sent");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    } catch (e) {
      /*   alert(e.response.data.message); */
    }
  };

  return (
    <div className="contact" id="contact">
      {/*  {showPopUp && <div className="showPopUp">Message has been sent</div>} */}

      <div className="appContainer">
        <div className="headertext">
          <h3>Свяжитесь с нами!</h3>
        </div>
        <div className="contactPageContainer">
          <div className="textLeft">
            <h4>OfficeCraft</h4>
            <p>249 - 4388 Still Creek Drive</p>
            <p>Burnaby, BC V5C 6C6</p>
            <p>T: (+1) 604-343-6576</p>
            <p>Email: info@smartbooksbc.com</p>
          </div>
          <div className="inputRight">
            <form className="contactForm" onSubmit={sendmail}>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Your Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Your Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="textArea"
                required
                name="textarea"
                placeholder="Your Text..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div>
                <div></div>
              </div>
              <button
                onClick={() => sendmail()}
                type="submit"
                value="Send"
                className="button"
              >
                SEND {">"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
