import React, { useEffect, useState } from "react";
import { Projects } from "./Projects";
export const Publication = () => {
    const [txtPublic, setTxtPublic] = useState('проектов');
    const [txtBelow, setTxtBelow] = useState('Добавить новый проект');
    const [page, setPage] = useState('projects');
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split('/').pop() == 'projects') {
                setTxtPublic('проектов');
                setTxtBelow('Добавить новый проект');
                setPage('projects');
            }
            if (window.location.pathname.split('/').pop() == 'news') {
                setTxtPublic('новостей');
                setTxtBelow('Добавить новую новость');
                setPage('news');
            }
            if (window.location.pathname.split('/').pop() == 'vacancies') {
                setTxtPublic('вакансий');
                setTxtBelow('Создать новую вакансию');
                setPage('vacancies');
            }
            if (window.location.pathname.split('/').pop() == 'team') {
                setTxtPublic('команды');
                setTxtBelow('Добавить нового участника команды');
                setPage('team');
            }
        }
    });
    return (React.createElement("div", { className: 'wrap_public_txt' },
        React.createElement("p", { className: 'txtPublic' },
            "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F ",
            txtPublic),
        React.createElement("a", { href: `/publication/` + page, className: 'txtBelow' },
            React.createElement("span", null, "+"),
            " ",
            txtBelow),
        React.createElement("div", { className: 'wrap_each_project' },
            React.createElement(Projects, { page: page }),
            React.createElement(Projects, { page: page }),
            React.createElement(Projects, { page: page }),
            React.createElement(Projects, { page: page }),
            React.createElement(Projects, { page: page }))));
};
