import React, { useEffect, useState } from "react";
import { Buildings } from "./Buildings";
export const Filtr = () => {
    const [searchInput, setSearchInput] = useState(" ");
    const [category, setCategory] = useState("Все проекты");
    const changeFiltr = (e, category) => {
        setCategory(category);
        document.querySelectorAll(".each_category").forEach((item) => {
            item.classList.remove("choosenCategory");
        });
        e.target.classList.add("choosenCategory");
    };
    useEffect(() => {
        if (localStorage.getItem("category") !== null) {
            setCategory(String(localStorage.getItem("category")));
        }
    }, []);
    return (React.createElement("div", { className: "wrap_aboutProject" },
        React.createElement("div", { className: "nested_wrap_aboutProject" },
            React.createElement("div", { id: "project_title" },
                React.createElement("p", { className: "about_title spec_about_title", id: "project_spec" }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"),
                React.createElement("p", { className: "about_title spec_about_title", id: "project_spec_txt" }, "\u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438, \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430")),
            React.createElement("input", { type: "text", id: "inputSearch", placeholder: "\u041F\u043E\u0438\u0441\u043A", onChange: (e) => setSearchInput(e.target.value) }),
            React.createElement("div", { className: "aboutProject" },
                React.createElement("div", { className: "wrap_allCategory" },
                    React.createElement("p", { className: `each_category ${category === "Все проекты" ? "choosenCategory" : ""}`, onClick: () => setCategory("Все проекты") }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement("p", { className: `each_category ${category === "Жилые комплексы" ? "choosenCategory" : ""}`, onClick: () => setCategory("Жилые комплексы") }, "\u0416\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("p", { className: `each_category ${category === "Общественно-деловые комплексы"
                            ? "choosenCategory"
                            : ""}`, onClick: () => setCategory("Общественно-деловые комплексы") }, "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E-\u0434\u0435\u043B\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("p", { className: `each_category ${category === "Гостиничные комплексы" ? "choosenCategory" : ""}`, onClick: () => setCategory("Гостиничные комплексы") }, "\u0413\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("p", { className: `each_category ${category === "Градостроительные концепции"
                            ? "choosenCategory"
                            : ""}`, onClick: () => setCategory("Градостроительные концепции") }, "\u0413\u0440\u0430\u0434\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"),
                    React.createElement("p", { className: `each_category ${category === "Развлекательные комплексы"
                            ? "choosenCategory"
                            : ""}`, onClick: () => setCategory("Развлекательные комплексы") }, "\u0420\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B"),
                    React.createElement("p", { className: `each_category ${category === "Конкурсы" ? "choosenCategory" : ""}`, onClick: () => setCategory("Конкурсы") }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u044B"),
                    React.createElement("p", { className: `each_category ${category === "Интерьеры" ? "choosenCategory" : ""}`, onClick: () => setCategory("Интерьеры") }, "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u044B")))),
        React.createElement(Buildings, { searchInput: searchInput, selectedCategory: category })));
};
