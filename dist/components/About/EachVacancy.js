import React, { useEffect } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { Request } from "../Request";
import { ContentVacancy } from "./ContentVacancy";
export const EachVacancy = () => {
    useEffect(() => {
        if (typeof window != "undefined") {
            window.scrollTo(0, 0);
        }
    });
    return (React.createElement("p", { className: "wrap_main_page" },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(ContentVacancy, null),
        React.createElement(Request, null),
        React.createElement(Footer, null)));
};
