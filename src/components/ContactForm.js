import React from "react";
import "../styles/main.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58jnlbv",
        "template_qa65l9j",
        e.target,
        "Z77ZjsbbOexxbQSW2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right"></div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>
                    Свяжитесь с нами прямо сегодня! Или заполните форму
                  </span>
                </div>
                <div class="app-description">
                  <span class="app-description-secondary">
                    email: info@officecraft.com
                  </span>
                  <span class="app-description-secondary">
                    Тел: +7(495) 960-5995!
                  </span>
                  <span class="app-description-secondary">
                    Адрес:141421,Россия, Московская Область, г. Химки, мрк.
                    Сходня, ул, Железнодорожная д. 8, офис 215
                  </span>
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">CANCEL</button>
                    <button
                      class="app-form-button"
                      onSubmit={(e) => sendEmail(e)}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
