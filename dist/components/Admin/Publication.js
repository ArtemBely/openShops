import React, { useEffect, useState } from "react";
import { Projects } from "./Projects";
let projects, news, vacancies, team;
export const Publication = () => {
    if (typeof window != "undefined") {
        projects = window.__INITIAL_PROJECTS__;
        news = window.__INITIAL_NEWS__;
        vacancies = window.__INITIAL_VACANCIES__;
        team = window.__INITIAL_TEAM__;
    }
    const [txtPublic, setTxtPublic] = useState("проектов");
    const [txtBelow, setTxtBelow] = useState("Добавить новый проект");
    const [page, setPage] = useState("projects");
    const [scope, setScope] = useState([{}]);
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == "projects") {
                setTxtPublic("проектов");
                setTxtBelow("Добавить новый проект");
                setPage("projects");
                setScope(projects);
            }
            if (window.location.pathname.split("/").pop() == "news") {
                setTxtPublic("новостей");
                setTxtBelow("Добавить новую новость");
                setPage("news");
                setScope(news);
            }
            if (window.location.pathname.split("/").pop() == "vacancies") {
                setTxtPublic("вакансий");
                setTxtBelow("Создать новую вакансию");
                setPage("vacancies");
                setScope(vacancies);
            }
            if (window.location.pathname.split("/").pop() == "team") {
                setTxtPublic("команды");
                setTxtBelow("Добавить нового участника команды");
                setPage("team");
                setScope(team);
            }
        }
    });
    return (React.createElement("div", { className: "wrap_public_txt" },
        React.createElement("p", { className: "txtPublic" },
            "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F ",
            txtPublic),
        React.createElement("a", { href: `/publication/` + page, className: "txtBelow" },
            React.createElement("span", null, "+"),
            " ",
            txtBelow),
        React.createElement("div", { className: "wrap_each_project" }, scope.map((item) => (React.createElement(Projects, { page: page, item: item }))))));
};
