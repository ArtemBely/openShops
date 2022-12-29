import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { NewsContent } from "./NewsContent";
let news;
export const EachNews = () => {
    if (typeof window != "undefined") {
        news = window.__INITIAL_ONE_NEWS__;
    }
    const [currentNews, setCurrentNews] = useState({});
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == news._id) {
                setCurrentNews(news);
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
        React.createElement(NewsContent, { currentNews: currentNews }),
        React.createElement(Footer, null)));
};
