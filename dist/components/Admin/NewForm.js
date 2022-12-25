import React, { useState } from "react";
import { Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AddNews } from "./AddNews";
import { AddProject } from "./AddProject";
import { AddTeam } from "./AddTeam";
const close = '../../../images/Vector.svg';
let data;
export const NewForm = () => {
    if (typeof window != "undefined") {
        data = window.__INITIAL_INFO__;
    }
    const [mainFile, setMainFile] = useState(false);
    const showFile = () => { setMainFile(prevState => !prevState); };
    const defineForm = () => {
        if (typeof window != "undefined") {
            return window.location.pathname.split('/')[2] == 'vacancies' ? 'vacancyForm' :
                window.location.pathname.split('/')[2] == 'news' ? 'newsForm' :
                    window.location.pathname.split('/')[2] == 'team' ? 'teamForm' : 'projectsForm';
        }
        return 'projectsForm';
    };
    const detectDelete = () => {
        if (typeof window != "undefined" && window.location.pathname.split('/').length == 4)
            return true;
        else
            return false;
    };
    const detectPath = () => {
        let def = '';
        if (typeof window != "undefined" && window.location.pathname.split('/').length == 4) {
            def = window.location.pathname.split('/')[2].concat('/').concat(window.location.pathname.split('/')[3]);
        }
        return def;
    };
    return (React.createElement("div", { className: 'wrap_main_form_admin' },
        React.createElement("div", { className: 'main_form_admin' },
            React.createElement("p", { className: 'txtPublic' }, "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B"),
            React.createElement("p", { className: 'txtBelow', onClick: showFile },
                React.createElement("span", null, "+"),
                " ",
                !mainFile ? 'Добавить основное изображение' : 'Скрыть'),
            React.createElement("input", { type: 'file', className: 'mainFile', style: { display: mainFile ? 'block' : 'none' } }),
            React.createElement("div", { className: 'wrap_post_team' },
                React.createElement("div", { className: 'wrap_btn_admin' },
                    React.createElement(Route, { path: ["/publication/news/:id", "/publication/vacancies/:id", "/publication/team/:id", "/publication/projects/:id"] },
                        React.createElement("a", { href: `/publication/${detectPath().split('/')[0]}/delete/${detectPath().split('/')[1]}`, style: { display: detectDelete() ? 'block' : 'none' } },
                            React.createElement("button", { type: 'submit', className: 'delete_admin' }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))),
                    React.createElement("button", { type: 'submit', style: { display: detectDelete() ? 'none' : 'block' }, onClick: () => { history.back(); }, className: 'btn_admin' },
                        React.createElement("img", { src: close, id: 'close_admin' }),
                        " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E"),
                    React.createElement("button", { type: 'submit', className: 'btn_admin', form: defineForm() }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")),
                React.createElement(Route, { path: ["/publication/team", "/publication/team/:id"] },
                    React.createElement(AddTeam, { data: data }))),
            React.createElement(Route, { path: ["/publication/news", "/publication/news/:id", "/publication/vacancies", "/publication/vacancies/:id"] },
                React.createElement(AddNews, { data: data })),
            React.createElement(Route, { path: ["/publication/projects", "/publication/projects/:id"] },
                React.createElement(AddProject, { data: data })))));
};
