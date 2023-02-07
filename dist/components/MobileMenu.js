import React from "react";
import { NavLink } from "react-router-dom";
const logo = "../../images/Frame 1.svg";
const telegram = "../../images/icon-park-outline_telegram.svg";
const phone = "../../images/ant-design_phone-filled.svg";
const letter = "../../images/Vector-3.svg";
const whatsapp = "../../images/Vector-4.svg";
class MobileMenu extends React.Component {
    constructor(iProps) {
        super(iProps);
    }
    render() {
        const state = this.props;
        const closeMobile = () => {
            this.props.changeBurger();
        };
        return (React.createElement("div", { className: "wrap_mobileMenu", style: {
                display: state.display ? "flex" : "none",
            } },
            React.createElement("div", { className: "mobile_menu" },
                React.createElement("div", { className: "wrap_mobile_Elements" },
                    React.createElement(NavLink, { to: "/", className: "mobile_logo_mobile" },
                        React.createElement("img", { src: logo, id: "logo" })),
                    React.createElement("div", { className: "burgerMobile", onClick: closeMobile },
                        React.createElement("p", { className: "each_burger_span leftRotate", style: { backgroundColor: "white" } }),
                        React.createElement("p", { className: "each_burger_span dispNone", style: { backgroundColor: "white" } }),
                        React.createElement("p", { className: "each_burger_span rightRotate", style: { backgroundColor: "white" } }))),
                React.createElement("div", { className: "mobile_menu_links" },
                    React.createElement(NavLink, { to: "/about", className: "menu_linksBold", activeClassName: "active_menu_links" }, "\u041E \u043D\u0430\u0441"),
                    React.createElement(NavLink, { to: "/projects", className: "menu_linksBold", activeClassName: "active_menu_links" }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement(NavLink, { to: "/news", className: "menu_linksBold", activeClassName: "active_menu_links" }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"),
                    React.createElement(NavLink, { to: "/contacts", className: "menu_linksBold", activeClassName: "active_menu_links" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                React.createElement("p", { className: "white_line" }),
                React.createElement("div", { className: "wrap_footer_mobile" },
                    React.createElement("div", { className: "footer" },
                        React.createElement("div", { className: "foot_links_mobile footerCorrect" },
                            React.createElement("p", { className: "grey_link" }, "\u041E\u0444\u0438\u0441"),
                            React.createElement("p", { className: "each_address showDesctopAddress" }, "107076, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B."),
                            React.createElement("p", { className: "each_address showDesctopAddress" }, "\u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B, \u0434. 3, \u0441\u0442\u0440. 32,"),
                            React.createElement("p", { className: "each_address showDesctopAddress" }, "\u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1"),
                            React.createElement("p", { className: "each_address showPlanchetAddress" }, "107076, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B,"),
                            React.createElement("p", { className: "each_address showPlanchetAddress" }, "\u0434. 3, \u0441\u0442\u0440. 32, \u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1")),
                        React.createElement("div", { className: "foot_links_mobile middle_foot_mobile" },
                            React.createElement("p", { className: "grey_link", id: "projects_foot_title" }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0416\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E-\u0434\u0435\u043B\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0413\u0440\u0430\u0434\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0420\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u044B"),
                            React.createElement(NavLink, { to: "/projects", className: "each_other" }, "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u044B")),
                        React.createElement("div", { className: "foot_links_mobile contacts_mobile" },
                            React.createElement("p", { className: "grey_link" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                            React.createElement("a", { href: "mailto:info@o-master.ru", className: "links_contact" },
                                React.createElement("p", { className: "each_other" }, "info@o-master.ru")),
                            React.createElement("a", { href: "tel:+74997536333", className: "links_contact" },
                                React.createElement("p", { className: "each_other" }, "+7 499 753 63 33 (2046)")),
                            React.createElement("div", { className: "wrap_social_media" },
                                React.createElement("a", { href: "", id: "phone_link" },
                                    React.createElement("img", { src: phone, style: { height: 22 } })),
                                React.createElement("a", { href: "", id: "letter_link" },
                                    React.createElement("img", { src: letter, style: { height: 22 } })),
                                React.createElement("a", { href: "", id: "whats_link" },
                                    React.createElement("img", { src: whatsapp, style: { height: 22 } })),
                                React.createElement("a", { href: "", id: "tele_link" },
                                    React.createElement("img", { src: telegram, style: { height: 22 } })))))))));
    }
}
export default MobileMenu;
