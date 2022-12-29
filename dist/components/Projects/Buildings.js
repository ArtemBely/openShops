import React, { useEffect, useState } from "react";
const uno = "../../../images/projects/uno_main.jpg";
let projects;
export const Buildings = ({ searchInput }) => {
    if (typeof window != "undefined") {
        projects = window.__INITIAL_PROJECTS__;
    }
    const [allProjects, setAllProjects] = useState([{}]);
    const [filteredProjects, setFilteredProjects] = useState(null);
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == "projects") {
                setAllProjects(projects);
            }
        }
    });
    useEffect(() => {
        console.log("filteredProjects,", filteredProjects);
    }, [filteredProjects]);
    useEffect(() => {
        console.log("allProjects,", allProjects);
    }, [allProjects]);
    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filtProjects = filterProjects(searchInput);
            console.log("debounce + filtProjects", filtProjects);
            setFilteredProjects(filtProjects);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchInput]);
    const filterProjects = (searchText) => {
        console.log(searchInput, projects);
        if (!searchText || searchText === " ") {
            return projects;
        }
        return projects.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));
    };
    return (React.createElement("div", { className: "wrap_buildings_inside" },
        React.createElement("div", { className: "buildings_inside" }, filteredProjects ? (filteredProjects.map((project) => (React.createElement("a", { key: project._id, href: `/projects/${project._id}`, className: "wrap_each_object" },
            React.createElement("img", { src: `../../../uploads/${project.noExchangeFile}`, className: "each_project_img" }),
            React.createElement("div", { className: "wrap_objectInfo " },
                React.createElement("p", { className: "common_addressObject" }, project.title),
                React.createElement("p", { className: "common_titleObject" }, project.title)))))) : (React.createElement(React.Fragment, null)))));
};
