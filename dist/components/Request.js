import React, { useState } from "react";
//import ReCAPTCHA from "react-google-recaptcha";
const telegram = "../../images/akar-icons_telegram-fill.svg";
const whatsapp = "../../images/akar-icons_whatsapp-fill.svg";
export const Request = () => {
    const [verfied, setVerifed] = useState(false);
    function onChange() {
        setVerifed(true);
    }
    return (React.createElement("div", { className: "wrap_request" },
        React.createElement("div", { className: "request", id: "request_field" },
            React.createElement("div", { className: "leave_request" },
                React.createElement("form", { action: "/email", method: "post", id: "req_form" },
                    React.createElement("p", { className: "big_title" }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443"),
                    React.createElement("p", { className: "each_req_title" }, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"),
                    React.createElement("input", { name: "name", type: "text", className: "req_inputs" }),
                    React.createElement("p", { className: "each_req_title" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),
                    React.createElement("input", { name: "number", type: "tel", className: "req_inputs" }),
                    React.createElement("p", { className: "each_req_title" }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),
                    React.createElement("textarea", { name: "comment", className: "req_inputs comment_field" }),
                    React.createElement("button", { type: "submit", id: "req_btn", disabled: !verfied }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0440\u0438\u0444"))),
            React.createElement("div", { className: "msg_us" },
                React.createElement("p", { className: "big_title" }, "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C"),
                React.createElement("a", { href: "#", className: "links_foot" },
                    React.createElement("button", { type: "submit", className: "msg_us_btn" },
                        React.createElement("img", { src: telegram, className: "msg_imgs" }),
                        " Telegram")),
                React.createElement("a", { href: "#", className: "links_foot" },
                    React.createElement("button", { type: "submit", className: "msg_us_btn" },
                        React.createElement("img", { src: whatsapp, className: "msg_imgs" }),
                        " WhatsApp"))))));
};
