import React, { useState, useEffect } from "react";
export const NavBar = ({ currentNews, currentProject }) => {
    const [currentPath, setCurrentPath] = useState("");
    const [navPath, setNavPath] = useState("");
    useEffect(() => {
        console.log("currentNews: ", currentNews);
    }, [currentNews]);
    useEffect(() => {
        setNavPath(currentPath.split("→")[0].trim() === "О нас"
            ? "/about"
            : currentPath.split("→")[0].trim() === "Проекты"
                ? "/projects"
                : currentPath.split("→")[0].trim() === "Новости"
                    ? "/news"
                    : currentPath.split("→")[0].trim() === "Контакты"
                        ? "/contacts"
                        : "");
    }, [currentPath]);
    useEffect(() => {
        if (typeof window != "undefined") {
            setCurrentPath(window.location.pathname == "/contacts"
                ? "Контакты"
                : window.location.pathname == "/about"
                    ? "О нас"
                    : window.location.pathname ==
                        "/about/" + window.location.pathname.split("/").pop()
                        ? `О нас → ${currentNews === null || currentNews === void 0 ? void 0 : currentNews.title}`
                        : window.location.pathname == "/projects"
                            ? "Проекты"
                            : window.location.pathname ==
                                "/projects/" + window.location.pathname.split("/").pop()
                                ? `Проекты → ${currentProject && currentProject.title}`
                                : window.location.pathname == "/news"
                                    ? "Новости"
                                    : window.location.pathname ==
                                        "/news/" + window.location.pathname.split("/").pop()
                                        ? `Новости → ${currentNews && currentNews.title}`
                                        : "");
        }
    }, [currentPath]);
    return (React.createElement("div", { className: "wrap_navbar" },
        React.createElement("div", { className: "navbar" },
            React.createElement("p", { className: "navbar_style" },
                React.createElement("a", { href: "/" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
                " \u2192",
                " ",
                React.createElement("a", { href: navPath }, currentPath.split("→")[0].trim()),
                currentPath.split("→")[1] && (React.createElement("span", null,
                    "\u2192 ",
                    currentPath.split("→")[1].trim()))))));
};
