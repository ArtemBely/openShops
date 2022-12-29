import React, { useEffect, useState } from "react";
let vacancies;
export const Vacancies = () => {
    if (typeof window != "undefined") {
        vacancies = window.__INITIAL_VACANCIES__;
    }
    const [allVacancies, setAllVacancies] = useState([
        {},
    ]);
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == "about") {
                setAllVacancies(vacancies);
            }
        }
    });
    return (React.createElement("div", { className: "wrap_vacancies" },
        React.createElement("div", { className: "vacancies" },
            React.createElement("p", { className: "txt_about1Title second_title", id: "vac1" }, "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438"),
            React.createElement("div", { className: "wrap_each_vacancy" }, allVacancies.map((vacancy) => (React.createElement("a", { key: vacancy._id, href: `/about/${vacancy._id}`, className: "each_vacancy" },
                React.createElement("div", { className: "wrap_vacancy_txt" },
                    React.createElement("p", { className: "name_of" }, vacancy.title),
                    React.createElement("p", { className: "lastname_of" }, vacancy.description)),
                React.createElement("p", { className: "date_vacancy" }, vacancy.tag))))))));
};
