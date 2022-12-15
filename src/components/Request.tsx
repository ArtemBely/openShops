import React, { Component } from "react";
const telegram = "../../images/akar-icons_telegram-fill.svg";
const whatsapp = "../../images/akar-icons_whatsapp-fill.svg";

declare global {
  interface Window {
    __INITIAL_DATA__: object;
  }
}

class Request extends Component {
  render() {
    return (
      <div className="wrap_request">
        <div className="request" id="request_field">
          <div className="leave_request">
            <form method="POST" id="req_form">
              <p className="big_title">Оставьте заявку</p>
              <p className="each_req_title">Ваше имя</p>
              <input type="text" className="req_inputs" />
              <p className="each_req_title">Телефон</p>
              <input type="tel" className="req_inputs" />
              <p className="each_req_title">Комментарий</p>
              <textarea className="req_inputs comment_field"></textarea>
              <button type="submit" id="req_btn">
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
  }
}

export default Request;
