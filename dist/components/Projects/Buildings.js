import React from "react";
import { NavLink } from "react-router-dom";
const uno = "../../../images/projects/uno_main.jpg";
const fone1 = "../../../images/Rectangle 1-2.png";
const fone2 = "../../../images/Rectangle 2-2.png";
const fone3 = "../../../images/Frame 483-2.png";
const fone4 = "../../../images/Rectangle 4-2.png";
const fone5 = "../../../images/Rectangle 1-2-2.png";
const build2 = "../../../images/projects/buildings/2.jpg";
const build3 = "../../../images/projects/buildings/3.png";
const build4 = "../../../images/projects/buildings/4.png";
const build5 = "../../../images/projects/buildings/5.png";
const build6 = "../../../images/projects/buildings/6.jpg";
export const Buildings = () => {
    return (React.createElement("div", { className: "wrap_buildings_inside" },
        React.createElement("div", { className: "buildings_inside" },
            React.createElement(NavLink, { to: "/projects/1", className: "wrap_each_object" },
                React.createElement("img", { src: uno, className: "each_project_img" }),
                React.createElement("div", { className: "wrap_objectInfo " },
                    React.createElement("p", { className: "common_addressObject" }, "\u0433.\u041C\u043E\u0441\u043A\u0432\u0430"),
                    React.createElement("p", { className: "common_titleObject" }, "\u0416\u041A UNO \u0421\u0442\u0430\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0432\u0441\u043A\u0438\u0439"))),
            React.createElement(NavLink, { to: "/projects/1", className: "wrap_each_object" },
                React.createElement("img", { src: build2, className: "each_project_img" }),
                React.createElement("div", { className: "wrap_objectInfo " },
                    React.createElement("p", { className: "common_addressObject" }, "\u0433.\u043E. \u041B\u044E\u0431\u0435\u0440\u0446\u044B"),
                    React.createElement("p", { className: "common_titleObject" }, "\u0416\u041A \u0413\u043E\u0433\u043E\u043B\u044C \u043F\u0430\u0440\u043A \u041A\u043E\u0440\u043F\u0443\u0441\u0430 \u041A-1, \u041A-2"))),
            React.createElement(NavLink, { to: "/projects/1", className: "wrap_each_object" },
                React.createElement("img", { src: build3, className: "each_project_img" }),
                React.createElement("div", { className: "wrap_objectInfo " },
                    React.createElement("p", { className: "common_addressObject" }, "\u041A\u0440\u0430\u0441\u043D\u043E\u0433\u043E\u0440\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D"),
                    React.createElement("p", { className: "common_titleObject" }, "\u0428\u043A\u043E\u043B\u0430 \u043D\u0430 840 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F"))),
            React.createElement(NavLink, { to: "/projects/1", className: "wrap_each_object" },
                React.createElement("img", { src: build4, className: "each_project_img" }),
                React.createElement("div", { className: "wrap_objectInfo " },
                    React.createElement("p", { className: "common_addressObject" }, "\u0433.\u041C\u043E\u0441\u043A\u0432\u0430"),
                    React.createElement("p", { className: "common_titleObject" }, "\u0414\u043E\u0441\u0443\u0433\u043E\u0432\u044B\u0439 \u0446\u0435\u043D\u0442\u0440"))),
            React.createElement(NavLink, { to: "/projects/1", className: "wrap_each_object" },
                React.createElement("img", { src: build5, className: "each_project_img" }),
                React.createElement("div", { className: "wrap_objectInfo " },
                    React.createElement("p", { className: "common_addressObject" }, "\u0433. \u041C\u043E\u0441\u043A\u0432\u0430"),
                    React.createElement("p", { className: "common_titleObject" }, "\u0416\u041A \u0424\u0438\u0437\u0442\u0435\u0445\u0421\u0418\u0422\u0418"))),
            React.createElement(NavLink, { to: "/projects/1", className: "wrap_each_object" },
                React.createElement("img", { src: build6, className: "each_project_img" }),
                React.createElement("div", { className: "wrap_objectInfo " },
                    React.createElement("p", { className: "common_addressObject" }, "\u0433. \u041B\u044E\u0431\u0435\u0440\u0446\u044B"),
                    React.createElement("p", { className: "common_titleObject" }, "\u0416\u041A \u0413\u043E\u0433\u043E\u043B\u044C \u043F\u0430\u0440\u043A"))))));
};
