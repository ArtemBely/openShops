import React from "react";
import { Buildings } from './Buildings';
export const Filtr = () => {
    const changeFiltr = (e) => {
        document.querySelectorAll('.each_category').forEach((item) => {
            item.classList.remove('choosenCategory');
        });
        e.target.classList.add('choosenCategory');
    };
    return (React.createElement("div", { className: 'wrap_aboutProject' },
        React.createElement("div", { className: 'nested_wrap_aboutProject' },
            React.createElement("div", { id: 'project_title' },
                React.createElement("p", { className: 'about_title spec_about_title', id: 'project_spec' }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"),
                React.createElement("p", { className: 'about_title spec_about_title', id: 'project_spec_txt' }, "\u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438, \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430")),
            React.createElement("input", { type: 'text', id: 'inputSearch', placeholder: '\u041F\u043E\u0438\u0441\u043A' }),
            React.createElement("div", { className: 'aboutProject' },
                React.createElement("div", { className: 'wrap_allCategory' },
                    React.createElement("p", { className: 'each_category choosenCategory', onClick: changeFiltr }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u0416\u0438\u043B\u044B\u0435"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u041A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0435"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u041E\u0444\u0438\u0441\u043D\u044B\u0435"),
                    React.createElement("p", { className: 'each_category', onClick: changeFiltr }, "\u0413\u0440\u0430\u0434\u043E")))),
        React.createElement(Buildings, null)));
};
