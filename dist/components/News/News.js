import React, { useEffect, useState } from "react";
const fone1 = "../../../images/Rectangle 14-4.png";
let news;
export const News = () => {
    if (typeof window != "undefined") {
        news = window.__INITIAL_NEWS__;
    }
    const [allNews, setAllNews] = useState([{}]);
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == "news") {
                setAllNews(news);
            }
        }
    });
    return (React.createElement("div", { className: "wrap_buildings_inside" },
        React.createElement("div", { className: "news_inside" }, allNews.map((item) => (React.createElement("a", { key: item._id, href: `/news/${item._id}`, className: "wrap_each_news" },
            React.createElement("p", { className: "wrap_each_news_img" },
                React.createElement("img", { src: item.noExchangeFile
                        ? `../../../uploads/${item.noExchangeFile}`
                        : fone1, className: "each_news_img" })),
            React.createElement("div", { className: "wrap_description_of_news" },
                React.createElement("p", { className: "title_of_news" }, item.title),
                React.createElement("p", { className: "description_of_news" }, item.description)),
            React.createElement("p", { className: "date_style" }, item.tag)))))));
};
