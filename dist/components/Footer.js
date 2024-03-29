import React from "react";
const white_logo = "../../images/logo_footer.svg";
const telegram = "../../images/icon-park-outline_telegram.svg";
const whatsapp = "../../images/Vector-4.svg";
export const Footer = () => {
    const selectCategory = (category) => {
        localStorage.setItem("category", category);
    };
    return (React.createElement("div", { className: "wrap_footer" },
        React.createElement("div", { className: "footer" },
            React.createElement("img", { src: white_logo }),
            React.createElement("div", { className: "footer-top" },
                React.createElement("div", { className: "foot_links middle_foot" },
                    React.createElement("p", { className: "grey_link", id: "projects_foot_title" }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement("a", { href: "/projects", className: "each_other" }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Жилые комплексы"), className: "each_other" }, "\u0416\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Общественно-деловые комплексы"), className: "each_other" }, "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E-\u0434\u0435\u043B\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Гостиничные комплексы"), className: "each_other" }, "\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Градостроительные концепции"), className: "each_other" }, "\u0413\u0440\u0430\u0434\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Развлекательные комплексы"), className: "each_other" }, "\u0420\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Конкурсы"), className: "each_other" }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u044B"),
                    React.createElement("a", { href: "/projects", onClick: () => selectCategory("Интерьеры"), className: "each_other" }, "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u044B")),
                React.createElement("div", { className: "foot_links footerCorrect" },
                    React.createElement("p", { className: "grey_link" }, "\u041E\u0444\u0438\u0441"),
                    React.createElement("p", { className: "each_address showDesctopAddress" }, "107076, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B."),
                    React.createElement("p", { className: "each_address showDesctopAddress" }, "\u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B, \u0434. 3, \u0441\u0442\u0440. 32,"),
                    React.createElement("p", { className: "each_address showDesctopAddress" }, "\u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1"),
                    React.createElement("p", { className: "each_address showPlanchetAddress" }, "107076, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430,"),
                    React.createElement("p", { className: "each_address showPlanchetAddress" }, "\u0443\u043B. \u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B,"),
                    React.createElement("p", { className: "each_address showPlanchetAddress" }, "\u0434. 3, \u0441\u0442\u0440. 32, \u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1")),
                React.createElement("div", { className: "foot_links" },
                    React.createElement("p", { className: "grey_link grey_link-contacts" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
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
