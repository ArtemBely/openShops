import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { AllPhotos } from "./AllPhotos";
import { ProjectDescription } from "./ProjectDescription";
import PopupPhoto from "./PopupPhoto";
let project;
export const EachProject = () => {
    if (typeof window != "undefined") {
        project = window.__INITIAL_PROJECT__;
    }
    const [currentProject, setCurrentProject] = useState({});
    const [popupOpen, setPopupOpen] = useState(false);
    const [detailedImgName, setDetailedImgName] = useState("");
    const clickPopup = (name) => {
        setPopupOpen(!popupOpen);
        setDetailedImgName(name);
        document.body.style.overflow = "hidden";
    };
    const closePopup = () => {
        setPopupOpen(false);
        document.body.style.overflow = "auto";
    };
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
        React.createElement(NavBar, { currentProject: currentProject }),
        React.createElement("p", { className: "txt_about1Title txt_about1Title2" }, currentProject.title),
        React.createElement("div", { className: "wrap_main_page-project" },
            React.createElement(AllPhotos, { currentProject: currentProject, closePopup: closePopup, clickPopup: clickPopup, popupOpen: popupOpen }),
            React.createElement(ProjectDescription, { currentProject: currentProject })),
        React.createElement(PopupPhoto, { photos: currentProject.arrayOfFiles ? currentProject.arrayOfFiles : [], popupOpen: popupOpen, setPopupOpen: setPopupOpen, detailedImgName: detailedImgName, closePopup: closePopup }),
        React.createElement(Footer, null)));
};
