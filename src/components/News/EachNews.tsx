import React, { useEffect, useState } from "react";

import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { NewsContent } from "./NewsContent";
import { INews } from "../../server/models/news";

let news: INews;

declare global {
  interface Window {
    __INITIAL_ONE_NEWS__: INews;
  }
}

export const EachNews = () => {
  if (typeof window != "undefined") {
    news = window.__INITIAL_ONE_NEWS__;
  }

  const [currentNews, setCurrentNews] = useState<INews>({} as INews);

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

  return (
    <p className="wrap_main_page">
      <Header />
      <NavBar />
      <NewsContent currentNews={currentNews} />
      <Footer />
    </p>
  );
};
