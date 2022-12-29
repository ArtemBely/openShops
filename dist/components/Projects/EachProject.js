import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { AllPhotos } from "./AllPhotos";
import { ProjectDescription } from "./ProjectDescription";
let project;
export const EachProject = () => {
    if (typeof window != "undefined") {
        project = window.__INITIAL_PROJECT__;
    }
    const [currentProject, setCurrentProject] = useState({});
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == project._id) {
                setCurrentProject(project);
            }
        }
    });
    useEffect(() => {
        if (typeof window != "undefined") {
            window.scrollTo(0, 0);
        }
    });
    return (React.createElement("p", { className: "wrap_main_page" },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(AllPhotos, { currentProject: currentProject }),
        React.createElement(ProjectDescription, { currentProject: currentProject }),
        React.createElement(Footer, null)));
};
