import React, { useEffect, useState } from "react";
const uno = "../../../images/projects/uno_main.jpg";
let projects;
export const Buildings = ({ searchInput, selectedCategory, }) => {
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
    // categories
    useEffect(() => {
        if (selectedCategory !== "Все проекты") {
            const filtProject = projects.filter((project) => project.category === selectedCategory);
            setFilteredProjects(filtProject);
        }
        else {
            setFilteredProjects(projects);
        }
    }, [selectedCategory]);
    // search
    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filtProjects = filterProjects(searchInput);
            setFilteredProjects(filtProjects);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchInput]);
    const filterProjects = (searchText) => {
        if (!searchText || searchText === " ") {
            if (selectedCategory !== "Все проекты") {
                return projects.filter((project) => project.category === selectedCategory);
            }
            else {
                return projects;
            }
        }
        return projects.filter(({ title, category }) => title.toLowerCase().includes(searchText.toLowerCase()) &&
            category === selectedCategory);
    };
    return (React.createElement("div", { className: "wrap_buildings_inside" },
        React.createElement("div", { className: "buildings_inside" }, filteredProjects ? (filteredProjects.map((project) => (React.createElement("a", { key: project._id, href: `/projects/${project._id}`, className: "wrap_each_object" },
            React.createElement("img", { src: `../../../uploads/${project.noExchangeFile}`, className: "each_project_img" }),
            React.createElement("div", { className: "wrap_objectInfo " },
                React.createElement("p", { className: "common_addressObject" }, project.secondString),
                React.createElement("p", { className: "common_titleObject" }, project.title)))))) : (React.createElement(React.Fragment, null)))));
};
