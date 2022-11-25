import React, { useEffect } from "react";
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { AllPhotos } from "./AllPhotos";
import { ProjectDescription } from "./ProjectDescription";
export const EachProject = () => {
    useEffect(() => {
        if (typeof window != "undefined") {
            window.scrollTo(0, 0);
        }
    });
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(AllPhotos, null),
        React.createElement(ProjectDescription, null),
        React.createElement(Footer, null)));
};
