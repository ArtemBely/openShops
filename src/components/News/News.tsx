import React, { useEffect, useState } from "react";

import { INews } from "../../server/models/news";

const fone1 = "../../../images/Rectangle 14-4.png";

let news: INews[];

declare global {
  interface Window {
    __INITIAL_NEWS__: INews[];
  }
}

export const News = () => {
  if (typeof window != "undefined") {
    news = window.__INITIAL_NEWS__;
  }

  const [allNews, setAllNews] = useState<INews[]>([{} as INews]);

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.location.pathname.split("/").pop() == "news") {
        setAllNews(news);
      }
    }
  });

  return (
    <div className="wrap_buildings_inside">
      <div className="news_inside">
        {allNews.map((item) => (
          <a
            key={item._id}
            href={`/news/${item._id}`}
            className="wrap_each_news"
          >
            <p className="wrap_each_news_img">
              <img
                src={
                  item.noExchangeFile
                    ? `../../../uploads/${item.noExchangeFile}`
                    : fone1
                }
                className="each_news_img"
              />
            </p>
            <div className="wrap_description_of_news">
              <p className="title_of_news">{item.title}</p>
              <p className="description_of_news">{item.description}</p>
            </div>
            <p className="date_style">{item.tag}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
