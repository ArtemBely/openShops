import React from "react";
export const FiltrNews = () => {
    const changeFiltr = (e) => {
        document.querySelectorAll('.each_categoryNews').forEach((item) => {
            item.classList.remove('choosenCategory');
        });
        e.target.classList.add('choosenCategory');
    };
    return (React.createElement("div", { className: 'wrap_aboutProject' },
        React.createElement("div", { className: 'aboutProject' },
            React.createElement("div", { id: 'project_title' },
                React.createElement("p", { className: 'about_title spec_about_title' }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")),
            React.createElement("div", { className: 'wrap_allNews' },
                React.createElement("p", { className: 'each_categoryNews choosenCategory', onClick: changeFiltr }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement("p", { className: 'each_categoryNews', onClick: changeFiltr }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement("p", { className: 'each_categoryNews', onClick: changeFiltr }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement("p", { className: 'each_categoryNews', onClick: changeFiltr }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement("p", { className: 'each_categoryNews', onClick: changeFiltr }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement("p", { className: 'each_categoryNews planchHidden', onClick: changeFiltr }, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B")))));
};
