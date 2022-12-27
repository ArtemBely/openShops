import React, { useState } from "react";
import { Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AddNews } from "./AddNews";
import { AddProject } from "./AddProject";
import { AddTeam } from "./AddTeam";
const close = '../../../images/Vector.svg';
const deleteImg = '../../../images/Group 406.png';
let data;
export const NewForm = () => {
    if (typeof window != "undefined") {
        data = window.__INITIAL_INFO__;
    }
    const [image, setImage] = useState([]);
    console.log(image);
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
    const showUploadedImages = () => {
        return (React.createElement("div", { className: 'wrap_uploaded_images' },
            Array.from(image).map(item => {
                return (React.createElement("p", { className: 'wrap_each_uploaded_images' },
                    React.createElement("img", { src: item ? URL.createObjectURL(item) : "undefined" })));
            }),
            showExistedProjects()));
    };
    const showExistedProjects = () => {
        if (typeof data != "undefined" && data.arrayOfFiles != null && data.arrayOfFiles.length > 0)
            return (React.createElement("div", { className: 'wrap_uploaded_images existed_images' }, data.arrayOfFiles.map((item) => {
                return (React.createElement("p", { className: 'wrap_each_uploaded_images' },
                    React.createElement("a", { href: `/publication/projects/delete/${detectPath().split('/')[1]}/${item}` },
                        React.createElement("img", { src: `../../../uploads/${item}`, className: 'onShowDeleteImg', onMouseEnter: (e) => { e.target.src = deleteImg; }, onMouseOut: (e) => { e.target.src = `../../../uploads/${item}`; } }))));
            })));
        else
            return (React.createElement("div", { className: 'no_photos' }, "\u041D\u0435\u0442 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u0442\u043E"));
    };
    return (React.createElement("div", { className: 'wrap_main_form_admin' },
        React.createElement("div", { className: 'main_form_admin' },
            React.createElement("p", { className: 'txtPublic' }, "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B"),
            React.createElement("p", { className: 'txtBelow' },
                React.createElement("span", null, "+"),
                " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"),
            React.createElement("input", { type: 'file', name: 'noExchangeFile', form: defineForm(), className: 'mainFile' }),
            React.createElement("p", { className: defineForm() != 'teamForm' ? 'wrap_avatar' : 'wrap_avatar team_avatar' },
                React.createElement("img", { src: typeof data != "undefined" && data.noExchangeFile != null && data.noExchangeFile.length > 1 ? `../../../uploads/${data.noExchangeFile}` : '../../../images/question-mark.png' })),
            React.createElement("div", { className: 'wrap_post_team' },
                React.createElement("div", { className: 'wrap_btn_admin' },
                    React.createElement(Route, { path: ["/publication/news/:id", "/publication/vacancies/:id", "/publication/team/:id", "/publication/projects/:id"] },
                        React.createElement("a", { href: `/publication/${detectPath().split('/')[0]}/delete/${detectPath().split('/')[1]}`, style: { display: detectDelete() ? 'block' : 'none' } },
                            React.createElement("button", { type: 'submit', className: 'delete_admin' }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))),
                    React.createElement("button", { type: 'submit', style: { display: detectDelete() ? 'none' : 'block' }, onClick: () => { history.back(); }, className: 'btn_admin' },
                        React.createElement("img", { src: close, id: 'close_admin' }),
                        " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E"),
                    React.createElement("button", { type: 'submit', className: 'btn_admin', form: defineForm() }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")),
                React.createElement("div", { className: 'wrap_additionalImages', style: { display: defineForm() == 'projectsForm' ? 'grid' : 'none' } },
                    React.createElement("p", { className: 'txtBelow addTxtBelow' },
                        React.createElement("span", null, "+"),
                        " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"),
                    React.createElement("input", { type: 'file', onChange: (e) => { setImage(e.target.files); }, multiple: true, name: 'arrayFiles', form: 'projectsForm', className: 'mainFile2' }),
                    showUploadedImages()),
                React.createElement(Route, { path: ["/publication/team", "/publication/team/:id"] },
                    React.createElement(AddTeam, { data: data }))),
            React.createElement(Route, { path: ["/publication/news", "/publication/news/:id", "/publication/vacancies", "/publication/vacancies/:id"] },
                React.createElement(AddNews, { data: data })),
            React.createElement(Route, { path: ["/publication/projects", "/publication/projects/:id"] },
                React.createElement(AddProject, { data: data })))));
};
