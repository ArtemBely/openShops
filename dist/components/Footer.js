import React from "react";
import { NavLink } from "react-router-dom";
const white_logo = "../../images/logo_footer.svg";
const telegram = "../../images/icon-park-outline_telegram.svg";
const phone = "../../images/ant-design_phone-filled.svg";
const letter = "../../images/Vector-3.svg";
const whatsapp = "../../images/Vector-4.svg";
export const Footer = () => {
    return (React.createElement("div", { className: "wrap_footer" },
        React.createElement("div", { className: "footer" },
            React.createElement("img", { src: white_logo }),
            React.createElement("div", { className: "footer-top" },
                React.createElement("div", { className: "foot_links middle_foot" },
                    React.createElement("p", { className: "grey_link", id: "projects_foot_title" }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 1"),
                    React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 2"),
                    React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 3"),
                    React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 4")),
                React.createElement("div", { className: "foot_links footerCorrect" },
                    React.createElement("p", { className: "grey_link" }, "\u041E\u0444\u0438\u0441"),
                    React.createElement("p", { className: "each_address showDesctopAddress" }, "107076, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B."),
                    React.createElement("p", { className: "each_address showDesctopAddress" }, "\u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B, \u0434. 3, \u0441\u0442\u0440. 32,"),
                    React.createElement("p", { className: "each_address showDesctopAddress" }, "\u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1"),
                    React.createElement("p", { className: "each_address showPlanchetAddress" }, "107076, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B,"),
                    React.createElement("p", { className: "each_address showPlanchetAddress" }, "\u0434. 3, \u0441\u0442\u0440. 32, \u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1")),
                React.createElement("div", { className: "foot_links" },
                    React.createElement("p", { className: "grey_link" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                    React.createElement("a", { href: "mailto:info@o-master.ru", className: "links_contact" },
                        React.createElement("p", { className: "each_other" }, "info@o-master.ru")),
                    React.createElement("a", { href: "tel:+74997536333", className: "links_contact" },
                        React.createElement("p", { className: "each_other" }, "+7 499 753 63 33 (2046)")),
                    React.createElement("div", { className: "wrap_social_media" },
                        React.createElement("a", { href: "", id: "whats_link" },
                            React.createElement("img", { src: whatsapp, style: { height: 23 } })),
                        React.createElement("a", { href: "", id: "tele_link" },
                            React.createElement("img", { src: telegram, style: { height: 23 } }))))),
            React.createElement("div", { className: "footer-bottom" },
                React.createElement("p", null, "\u00A9 2022 \u00AB\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0438\u0435\u00BB"),
                React.createElement("p", null, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")))));
};
