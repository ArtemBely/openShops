import React, { useState } from "react";
import { AddNews } from "./AddNews";
import { AddProject } from "./AddProject";
import { AddTeam } from "./AddTeam";
const close = '../../../images/Vector.svg';
export const NewForm = () => {
    const [mainFile, setMainFile] = useState(false);
    const showFile = () => {
        setMainFile(prevState => !prevState);
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
                    React.createElement("button", { type: 'submit', className: 'btn_admin' },
                        React.createElement("img", { src: close, id: 'close_admin' }),
                        " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E"),
                    React.createElement("button", { type: 'submit', className: 'btn_admin' }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")),
                React.createElement(AddTeam, null)),
            React.createElement(AddNews, null),
            React.createElement(AddProject, null))));
};
