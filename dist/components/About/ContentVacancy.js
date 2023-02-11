import React, { useEffect, useState } from "react";
let vacancy;
export const ContentVacancy = () => {
    if (typeof window != "undefined") {
        vacancy = window.__INITIAL_VACANCY__;
    }
    const [currentVacancy, setCurrentVacancy] = useState({});
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == vacancy._id) {
                setCurrentVacancy(vacancy);
            }
        }
    });
    useEffect(() => {
        if (typeof window != "undefined") {
            window.scrollTo(0, 0);
        }
    });
    return (React.createElement("div", { className: "wrap_contentVacancy" },
        React.createElement("div", { className: "contentVacancy" },
            React.createElement("p", { className: "txt_about1Title spec_txt_about1Title" }, currentVacancy.title),
            React.createElement("img", { src: `../../../uploads/${currentVacancy.noExchangeFile}` }),
            React.createElement("p", { className: "descr_of_vacs" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"),
            React.createElement("div", { className: "txt_vacancy main_txt" },
                React.createElement("p", { className: "txt_vacancy spec_descr" }, currentVacancy.description)),
            React.createElement("div", { className: "wrap_txtVacs" },
                React.createElement("p", { className: "bold_vacancy" }, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"),
                React.createElement("p", { className: "txt_vacancy" }, currentVacancy.title),
                React.createElement("p", { className: "bold_vacancy" }, "A\u0434\u0440\u0435\u0441"),
                React.createElement("p", { className: "txt_vacancy" }, currentVacancy.tag)))));
};
