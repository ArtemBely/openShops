import React, { useEffect } from "react";
export const ProjectDescription = ({ currentProject, }) => {
    useEffect(() => {
        console.log(currentProject);
    }, [currentProject]);
    return (React.createElement("div", { className: "wrap_projectDescr" },
        React.createElement("div", { className: "projectDescr" },
            React.createElement("p", { className: "descr_of_vacs descr_of_project" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"),
            React.createElement("div", { className: "project-wrapper" },
                React.createElement("div", { className: "each_descr_div" },
                    React.createElement("p", { className: "bold_vacancy" }, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430"),
                    React.createElement("p", { className: "txt_vacancy" }, currentProject.title)),
                typeof currentProject.mainArray !== "undefined" ? (currentProject.mainArray[0].map((project, i) => (React.createElement("div", { key: i + project[0], className: "each_descr_div" },
                    React.createElement("p", { className: "bold_vacancy" }, project),
                    React.createElement("p", { className: "txt_vacancy" }, currentProject.mainArray[1][i]))))) : (React.createElement(React.Fragment, null)),
                React.createElement("p", { className: "bottom_grey" }),
                typeof currentProject.technicalArray !== "undefined" ? (currentProject.technicalArray[0].map((project, i) => (React.createElement("div", { key: i + project[0], className: "each_descr_div" },
                    React.createElement("p", { className: "bold_vacancy" }, project),
                    React.createElement("p", { className: "txt_vacancy" }, currentProject.technicalArray[1][i]))))) : (React.createElement(React.Fragment, null))),
            React.createElement("div", { className: "project-wrapper" },
                React.createElement("div", { className: "each_descr_div" }, typeof currentProject.technicalArray !== "undefined" ? (currentProject.descriptionArray[0].map((project, i) => (React.createElement("p", { className: "txt_vacancy technical_p" },
                    React.createElement("b", null, project),
                    React.createElement("br", null),
                    currentProject.descriptionArray[1][i])))) : (React.createElement(React.Fragment, null)))))));
};
