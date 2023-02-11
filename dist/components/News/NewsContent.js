import React from "react";
const fone1 = "../../../images/Rectangle 14-5-2.png";
export const NewsContent = ({ currentNews }) => {
    return (React.createElement("div", { className: "wrap_contentVacancy" },
        React.createElement("div", { className: "contentVacancy" },
            React.createElement("p", { className: "txt_about1Title" }, currentNews.title),
            React.createElement("p", { className: "date_style spec_data_style", id: "spec_data_style_news" }, currentNews.tag),
            React.createElement("img", { src: currentNews.noExchangeFile
                    ? `../../../uploads/${currentNews.noExchangeFile}`
                    : fone1 }),
            React.createElement("p", { className: "descr_of_vacs" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"),
            React.createElement("div", { className: "txt_vacancy main_txt" },
                React.createElement("p", { className: "txt_vacancy" }, currentNews.description)))));
};
