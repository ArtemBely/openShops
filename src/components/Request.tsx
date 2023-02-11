import React, { Component, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

const telegram = "../../images/akar-icons_telegram-fill.svg";
const whatsapp = "../../images/akar-icons_whatsapp-fill.svg";

declare global {
  interface Window {
    __INITIAL_DATA__: object;
  }
}

export const Request = () => {
  const [verfied, setVerifed] = useState(false);

  function onChange() {
    setVerifed(true);
  }

  return (
    <div className="wrap_request">
      <div className="request" id="request_field">
        <div className="leave_request">
          <form action="/email" method="post" id="req_form">
            <p className="big_title">Оставьте заявку</p>
            <p className="each_req_title">Ваше имя</p>
            <input name="name" type="text" className="req_inputs" />
            <p className="each_req_title">Телефон</p>
            <input name="number" type="tel" className="req_inputs" />
            <p className="each_req_title">Комментарий</p>
            <textarea
              name="comment"
              className="req_inputs comment_field"
            ></textarea>

            {/* <div className="captcha-wrapper"> */}
            <ReCAPTCHA
              sitekey="6Lc1-uEjAAAAANpe7ao66EzkW-KHA8Rvj6SL08hL"
              onChange={onChange}
              className="captcha"
            />
            {/* </div> */}

            <button type="submit" id="req_btn" disabled={!verfied}>
              Заполнить бриф
            </button>
          </form>
        </div>
        <div className="msg_us">
          <p className="big_title">Или напишите нам</p>
          <a href="#" className="links_foot">
            <button type="submit" className="msg_us_btn">
              <img src={telegram} className="msg_imgs" /> Telegram
            </button>
          </a>
          <a href="#" className="links_foot">
            <button type="submit" className="msg_us_btn">
              <img src={whatsapp} className="msg_imgs" /> WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
