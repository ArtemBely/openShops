import React, { useEffect } from "react";
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { NewsContent } from "./NewsContent";
export const EachNews = () => {
    useEffect(() => {
        if (typeof window != "undefined") {
            window.scrollTo(0, 0);
        }
    });
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(NewsContent, null),
        React.createElement(Footer, null)));
};
